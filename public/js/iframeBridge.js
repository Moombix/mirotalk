'use strict';

const NAMESPACE = 'mirotalk.iframe';
const VERSION = 1;

class IframeBridge {
    parentOrigin = "*"; // will be restricted after the first parent message
    joinedNotified = false;

    constructor() {
        // Do nothing if not embedded
        const isEmbedded = window.self !== window.top;
        if (!isEmbedded) return;

        window.addEventListener('message', this.onParentMessage.bind(this));
        this.setupToolbarClickEvents();
        this.setupEndEvents();
        this.setupScreenShareMonitoring();
        this.notifyJoinedWhenReady();

        // Announce to parent we're ready
        this.postToParent('ready', {}, 'handshake');
    }

    postToParent(name, payload = {}, action = 'event') {
        try {
            window.parent.postMessage(
                { type: NAMESPACE, scope: 'child', action, name, payload, version: VERSION },
                this.parentOrigin
            );
        } catch (err) {
            // eslint-disable-next-line no-console
            console.warn('[IframeBridge] postMessage failed', err);
        }
    }

    getEl(id) {
        return document.getElementById(id);
    }

    clickIfExists(id) {
        const el = this.getEl(id);
        if (el && typeof el.click === 'function' && !el.disabled) {
            el.click();
            return true;
        }
        return false;
    }

    setupToolbarClickEvents() {
        const ids = [
            'audioBtn',
            'videoBtn',
            'screenShareBtn',
            'leaveRoomBtn',
        ];
        ids.forEach((id) => {
            const el = this.getEl(id);
            if (el) {
                el.addEventListener('click', () => this.postToParent('toolbar.click', { id }));
            }
        });
    }

    notifyJoinedWhenReady() {
        const iv = setInterval(() => {
            if (RoomClientInterface.isConnected()) {
                if (!this.joinedNotified) {
                    this.joinedNotified = true;
                    this.postToParent('joined');
                }
                clearInterval(iv);
            }
        }, 1000);
    }

    setupEndEvents() {
        window.addEventListener('beforeunload', () => {});
        window.addEventListener('pagehide', () => {});
    }

    isScreenSharingActive() {
        return RoomClientInterface.isScreenShared();
    }

    setupScreenShareMonitoring() {
        const emit = () => this.postToParent('screen.share', { active: this.isScreenSharingActive() });

        // Button-based hints (fires quickly, real state verified by poller too)
        ['startScreenButton', 'stopScreenButton'].forEach((id) => {
            const el = this.getEl(id);
            if (el) el.addEventListener('click', () => setTimeout(emit, 50));
        });

        // Poll state to catch programmatic changes and permission failures
        let last = null;
        setInterval(() => {
            const cur = this.isScreenSharingActive();
            if (cur !== last) {
                last = cur;
                this.postToParent('screen.share', { active: cur });
            }
        }, 1000);
    }

    handleCommand(name) {
        switch (name) {
            case 'audio.toggle':
                this.clickIfExists('audioBtn');
                break;
            case 'video.toggle':
                this.clickIfExists('videoBtn');
                break;
            case 'screen.toggle':
                this.clickIfExists('screenShareBtn');
                break;
            case 'leave':
                RoomClientInterface.leaveRoom();
                break;
            default:
                // Unknown command
                break;
        }
    }

    onParentMessage(ev) {
        const { data, source, origin } = ev;
        if (!data || data.type !== NAMESPACE) return;
        if (source !== window.parent) return;

        // lock to the first known parent origin
        if (this.parentOrigin === '*') this.parentOrigin = origin;

        if (data.action === 'command') {
            this.handleCommand(data.name);
        } else if (data.action === 'handshake' && data.name === 'ack') {
            // Parent acknowledged. Nothing else is required for now.
        }
    }
}

const bridge = new IframeBridge();
