//const PLAYLIST_NEW_WAYS = "PLqi-HJej8buf-iyECUqIEiMfIuKvmVheH";
//const PLAYLIST_OLD_WAYS = "PLqi-HJej8buf-iyECUqIEiMfIuKvmVheH";
const PLAYLIST_OLD_WAYS = "PLqi-HJej8bufsCl1GC-IwRbn7ZH79DAC7";
const PLAYLIST_WORKING = "PLqi-HJej8budm2MAErRRPKgakeWnweAZl";
const PLAYLIST_NEW_WAYS = "PLqL0pXShgu8dQlM_JOZbatTZrmA69-muy";
//const PLAYLIST_OLD_WAYS = "PLqi-HJej8buez6MtRQUoYOSzFG_me42aV";
const PLAYLIST_SPEAK = "PLqL0pXShgu8cbXSFmq9ls3W6Saf-5BDky"

const FPS = 30
const KEY_COLOR = 0

//***********
//** OPTIONS
//***********

const OPTIONS = {
    record: false,
    videoWidth: 640,
    videoHeight: 407
}


const VIDEO_1 = {
    id:"videoOld",
    isAudio: false,
    autoPlay: true,
    playNewEveryBars: 8,
    playlists: [PLAYLIST_WORKING],
}

const VIDEO_2 = {
    id:"videoNew",
    isAudio: false,
    autoPlay: true,
    playNewEveryBars: 8,
    playlists: [PLAYLIST_NEW_WAYS]
}

const RENDERER_BLEND = {
    type: 'blend',
    enabled:true,
    textures: {
        'background': 0,
        'foreground': 1
    },
    uniforms: {
        blendMode: 15
    }
}


const RENDERER_CHROMA = {
    type: 'chromaSimple',
    enabled:true,
    textures: {
        'tOne': 0,
        'tTwo': 1
    },
    uniforms: {
        uMixRatio: .7,
        uThreshold: 0.2,
        uKeyColor: KEY_COLOR
    }
}

const RENDERER_PASSES = [RENDERER_CHROMA, RENDERER_BLEND]
/*{
        type: 'color',
        uniforms: {
            uSaturation: 0.5,
            uBrightness: 0,
            uContrast: 0.0,
            uHue: 1
        }
    }*/
const VIDEO_LAYER_1 = {
    time: 0.5,
    passes: []
}
const VIDEO_LAYER_2 = {
    time: 0.5,
    passes: [{
        type: 'color',
        uniforms: {
            uSaturation: 0.3,
            uBrightness: 0,
            uContrast: 0.,
            uHue: 1
        }
    }]
}

export {
    PLAYLIST_NEW_WAYS,
    PLAYLIST_OLD_WAYS,
    PLAYLIST_SPEAK,
    FPS,
    OPTIONS,
    RENDERER_PASSES,
    RENDERER_CHROMA,
    RENDERER_BLEND,
    VIDEO_1,
    VIDEO_2,
    VIDEO_LAYER_1,
    VIDEO_LAYER_2,
    PLAYLIST_WORKING,
    KEY_COLOR
}