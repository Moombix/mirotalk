'use strict';

const packageJson = require('../../package.json');

module.exports = {
    // Branding and customizations require a license: https://codecanyon.net/item/mirotalk-p2p-webrtc-realtime-video-conferences/38376661
    brand: {
        htmlInjection: true,
        app: {
            language: 'en', // https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes
            name: 'Moombix',
            title: '<h1>MiroTalk</h1>Free browser based Real-time video calls.<br />Simple, Secure, Fast.',
            description:
                'Start your next video call with a single click. No download, plug-in, or login is required. Just get straight to talking, messaging, and sharing your screen.',
            joinDescription: 'Pick a room name.<br />How about this one?',
            joinButtonLabel: 'JOIN ROOM',
            joinLastLabel: 'Your recent room:',
        },
        og: {
            type: 'app-webrtc',
            siteName: 'Moombix',
            title: 'Click the link to make a call.',
            description:
                'MiroTalk calling provides real-time HD quality and latency simply not available with traditional technology.',
            image: 'https://p2p.mirotalk.com/images/preview.png',
            url: 'https://p2p.mirotalk.com',
        },
        site: {
            shortcutIcon: '../images/logo.svg',
            appleTouchIcon: '../images/logo.svg',
            landingTitle: 'MiroTalk a Free Secure Video Calls, Chat & Screen Sharing.',
            newCallTitle: 'MiroTalk a Free Secure Video Calls, Chat & Screen Sharing.',
            newCallRoomTitle: 'Pick name. <br />Share URL. <br />Start conference.',
            newCallRoomDescription:
                "Each room has its disposable URL. Just pick a room name and share your custom URL. It's that easy.",
            loginTitle: 'MiroTalk - Host Protected login required.',
            clientTitle: 'MiroTalk WebRTC Video call, Chat Room & Screen Sharing.',
            privacyPolicyTitle: 'MiroTalk - privacy and policy.',
            stunTurnTitle: 'Test Stun/Turn Servers.',
            notFoundTitle: 'MiroTalk - 404 Page not found.',
        },
        html: {
            topSponsors: false,
            features: true,
            browsers: true,
            teams: false, // please keep me always true ;)
            tryEasier: false,
            poweredBy: false,
            sponsors: false,
            advertisers: false,
            supportUs: false,
            footer: false,
        },
        about: {
            imageUrl: '../images/mirotalk-logo.gif',
            title: `WebRTC P2P v${packageJson.version}`,
            html: `
                <button 
                    id="support-button" 
                    data-umami-event="Support button" 
                    onclick="window.open('https://codecanyon.net/user/miroslavpejic85')">
                    <i class="fas fa-heart" ></i>&nbsp;Support
                </button>
                <br /><br /><br />
                Author:<a 
                    id="linkedin-button" 
                    data-umami-event="Linkedin button" 
                    href="https://www.linkedin.com/in/miroslav-pejic-976a07101/" target="_blank"> 
                    Miroslav Pejic
                </a>
                <br />
                Email:<a 
                    id="email-button" 
                    data-umami-event="Email button" 
                    href="mailto:miroslav.pejic.85@gmail.com?subject=MiroTalk P2P info"> 
                    miroslav.pejic.85@gmail.com
                </a>
                <br /><br />
                <hr />
                <span>&copy; 2025 MiroTalk P2P, all rights reserved</span>
                <hr />
            `,
        },
        // https://docs.mirotalk.com/mirotalk-p2p/integration/#widgets-integration
        widget: {
            enabled: false,
            roomId: 'support-room',
            theme: 'dark',
            widgetState: 'minimized',
            widgetType: 'support',
            supportWidget: {
                position: 'top-right',
                expertImages: [
                    'https://photo.cloudron.pocketsolution.net/uploads/original/95/7d/a5f7f7a2c89a5fee7affda5f013c.jpeg',
                ],
                buttons: {
                    audio: true,
                    video: true,
                    screen: true,
                    chat: true,
                    join: true,
                },
                checkOnlineStatus: false,
                isOnline: true,
                customMessages: {
                    heading: 'Need Help?',
                    subheading: 'Get instant support from our expert team!',
                    connectText: 'connect in < 5 seconds',
                    onlineText: 'We are online',
                    offlineText: 'We are offline',
                    poweredBy: 'Powered by MiroTalk',
                },
            },
        },
        //...
    },
    /**
     * Configuration for controlling the visibility of buttons in the MiroTalk P2P client.
     * Set properties to true to show the corresponding buttons, or false to hide them.
     * captionBtn, showSwapCameraBtn, showScreenShareBtn, showFullScreenBtn, showVideoPipBtn, showDocumentPipBtn -> (auto-detected).
     */
    buttons: {
        main: {
            showShareQr: false,
            showShareRoomBtn: false, // For guests
            showHideMeBtn: false,
            showFullScreenBtn: false,
            showAudioBtn: true,
            showVideoBtn: true,
            showScreenBtn: true, // autodetected
            showRecordStreamBtn: false,
            showChatRoomBtn: false,
            showCaptionRoomBtn: false,
            showRoomEmojiPickerBtn: false,
            showMyHandBtn: true,
            showWhiteboardBtn: false,
            showSnapshotRoomBtn: false,
            showFileShareBtn: false,
            showDocumentPipBtn: true,
            showMySettingsBtn: true,
            showAboutBtn: false, // Please keep me always true, Thank you!
            showExtraBtn: false,
        },
        chat: {
            showTogglePinBtn: false,
            showMaxBtn: false,
            showSaveMessageBtn: false,
            showMarkDownBtn: false,
            showChatGPTBtn: false,
            showFileShareBtn: false,
            showShareVideoAudioBtn: false,
            showParticipantsBtn: false,
        },
        caption: {
            showTogglePinBtn: false,
            showMaxBtn: false,
        },
        settings: {
            showMicOptionsBtn: true,
            showTabRoomPeerName: true,
            showTabRoomParticipants: false,
            showTabRoomSecurity: false,
            showTabEmailInvitation: false,
            showCaptionEveryoneBtn: false,
            showMuteEveryoneBtn: false,
            showHideEveryoneBtn: false,
            showEjectEveryoneBtn: false,
            showLockRoomBtn: false,
            showUnlockRoomBtn: false,
            showShortcutsBtn: true,
            customNoiseSuppression: true,
        },
        remote: {
            showAudioVolume: true,
            audioBtnClickAllowed: false,
            videoBtnClickAllowed: false,
            showVideoPipBtn: true,
            showKickOutBtn: false,
            showSnapShotBtn: false,
            showFileShareBtn: false,
            showShareVideoAudioBtn: false,
            showGeoLocationBtn: false,
            showPrivateMessageBtn: false,
            showZoomInOutBtn: false,
            showVideoFocusBtn: true,
        },
        local: {
            showVideoPipBtn: true,
            showSnapShotBtn: false,
            showVideoCircleBtn: true,
            showZoomInOutBtn: false,
            showVideoFocusBtn: true,
        },
        whiteboard: {
            whiteboardLockBtn: false,
        },
    },
    webhook: {
        enabled: false, // Enable webhook functionality
        url: 'http://localhost:8888/webhook-endpoint', // Webhook server URL
    },
};
