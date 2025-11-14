'use strict';

/**
 * Configuration for controlling the visibility of buttons in the MiroTalk P2P client.
 * Set properties to true to show the corresponding buttons, or false to hide them.
 * captionBtn, showSwapCameraBtn, showScreenShareBtn, showFullScreenBtn, showVideoPipBtn, showDocumentPipBtn -> (auto-detected).
 */
let buttons = {
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
};
