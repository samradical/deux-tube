import GUI from './GUI';
//import { Emitter } from './vj/utils';

import Video from './deux-player';
import VideoEffects from '@samelie/video-effects'
import {
    PLAYLIST_NEW_WAYS,
    PLAYLIST_OLD_WAYS,
    PLAYLIST_WORKING,
    PLAYLIST_SPEAK,
    FPS,
    OPTIONS,
    RENDERER_PASSES,
    RENDERER_CHROMA,
    RENDERER_BLEND,
    SRT_1,
    SRT_2,
    VIDEO_1,
    VIDEO_2,
    VIDEO_LAYER_1,
    VIDEO_LAYER_2,
    KEY_COLOR
} from './index_options'

const DeuxTube = () => {

    var appEl = document.getElementById('app')
    var vjPlayer1, vjPlayer2

    function init(audioData) {

        /*vjPlayer1 = new Video(appEl, {
           noAutoStart: false,
           videoWidth: 640,
           videoHeight: 460,
           verbose: false,
           noVideoCanvas: false,
           elAttributes: {
             muted: true
           },
           video: true,
           jsonUrls: [
             'assets/amenothepdf52eed0-500d-11e6-aaf1-4d4553b6d1a3.json',
             'assets/everythingonee973dbe0-500d-11e6-aaf1-4d4553b6d1a3.json'
           ]
         }, "one")*/

        vjPlayer2 = new Video(appEl, {
            noAutoStart: false,
            videoWidth: 640,
            videoHeight: 460,
            verbose: true,
            noVideoCanvas: true,
            elAttributes: {
                muted: true
            },
            extensions: ['shuffle'],
            video: true,
            quality: {
                chooseBest: true,
            },
            /*jsonUrls: [
                'assets/everythingonee973dbe0-500d-11e6-aaf1-4d4553b6d1a3.json',
                'assets/amenothepdf52eed0-500d-11e6-aaf1-4d4553b6d1a3.json'
              ]*/
            playlists: [
                'PLK2s1qtdGAufuOuLS8AL0QK4f6Nw9fXEy',
                /*'PLBm5UHsvUTFrU0IILE_eeYk3kV73KDHsp',
                'PLRQ2jIXShfkaQoRXUilaQB3CVdqprTtvH',*/
            ]
        })

        console.log(vjPlayer2.vjPlayer.controllers[0])

        /*let videoEffects = new VideoEffects(
          document.getElementById('gl'),
          document.getElementById('c'),
          vjPlayer2.vjPlayer.mediaSources[0][0].el,
          document.getElementById('v'), { width: 640, height: 360, fullscreen: false }
        )*/

        let _o = {
                texture: {
                    type: 'uniform1i',
                    value: 0
                },
                texture2: {
                    type: 'uniform1i',
                    value: 1
                },
                uMixRatio: {
                    type: 'float',
                    value: 0.
                },
                uBrightness: {
                    type: 'float',
                    value: 0.
                },
                uContrast: {
                    type: 'float',
                    value: 0.
                },
                uKeyVideoIndex: {
                    type: 'int',
                    value: 0
                }
            }
            //let _uniforms = videoEffects.setUniforms(_o)

        let gui = new GUI({
            uMixRatio: _o.uMixRatio.value,
            uKeyVideoIndex: false
        })
        gui.addNumber('uMixRatio', 0., 1.01, (changedValue) => {
            _uniforms.uMixRatio = changedValue
        })
        gui.addBool('uKeyVideoIndex', (changedValue) => {
            _uniforms.uKeyVideoIndex = (changedValue) ? 1 : 0
        })

        /*let players = vjPlayer.controllers
    console.log(players);

    setTimeout(() => {
      players[0]._nextVideo()
    }, 5000)
*/
        window.addEventListener('resize', () => {});

        update()
    }

    init()

    function update() {
        window.requestAnimationFrame(update);
    }


}

export default DeuxTube
