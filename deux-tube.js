import GUI from './GUI';
import dummy_videos from './dummy_videos'
//import { Emitter } from './vj/utils';
var AnimationFrame = require('animation-frame');
AnimationFrame.FRAME_RATE = 30;

import Video from './deux-player';
import DeuxEffects from './deux-tube-fx';
import DashPlayerRecorder from '@samelie/dash-player-recorder'
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
  var vjPlayer1, vjPlayer2, _frameU

  function init(audioData) {

    vjPlayer1 = new Video({ el: appEl })
    vjPlayer1.addSource({
      noAutoStart: false,
      videoWidth: 640,
      videoHeight: 460,
      verbose: true,
      noVideoCanvas: true,
      elAttributes: {
        muted: true
      },
      extensions: ['loop'],
      //extensions: ['shuffle'],
      video: true,
      quality: {
        resolution: '240p',
        chooseBest: false,
      },
      playlists: [
        'PLuTh1a1eg5vbZTFzVvH3_lpTCgPlfzaoV',
        //'PLqi-HJej8buehtiukZnuRoL9yiRJfEBRQ'
      ],
      forcePlaylistUpdate: true

    })
    vjPlayer1.start()

    vjPlayer2 = new Video({ el: appEl })
    vjPlayer2.addSource({
      noAutoStart: false,
      videoWidth: 640,
      videoHeight: 460,
      verbose: true,
      noVideoCanvas: true,
      elAttributes: {
        muted: true
      },
      extensions: ['loop'],
      //extensions: ['shuffle'],
      video: true,
      quality: {
        resolution: '240p',
        chooseBest: false,
      },
      playlists: [
        'PLuTh1a1eg5vZ4NbXHavLdiJD3xkyrT7xi',
        //'PLqi-HJej8bufOfvfQWK6qJRhagFEJPeGk'
        //'PLBm5UHsvUTFphuF0ClFFqE7M_G0iPu4FT',
        //'PLuTh1a1eg5vY3PeMoaPs_X_0HqKgsOnDO',
        //'PLL-b-neHTAtMy8gpvq3Ld94id0Xl5KI1j',
        //'PLuTh1a1eg5vZ4NbXHavLdiJD3xkyrT7xi',
        //'PLuTh1a1eg5vbZTFzVvH3_lpTCgPlfzaoV'
      ],
      forcePlaylistUpdate: true

    })
    vjPlayer2.start()

    let _videoFx = new DeuxEffects(
      vjPlayer1.vjPlayer.mediaSources[0][0].el,
      vjPlayer2.vjPlayer.mediaSources[0][0].el,
      { width: 320, height: 240, fullscreen: false }
    )
    return

    let _controller = vjPlayer2.vjPlayer.controllers[0]
    let _recorder = new DashPlayerRecorder(_controller, _controller.socket)
      //_recorder.start();

    let _guiC = {
      startRecord: () => { console.log("HERE"); },
      endRecord: () => { _recorder.save(); },
      upload: () => { _recorder.upload(); },
      uMixRatio: 0, //_o.uMixRatio.value,
      uKeyVideoIndex: false,
      unshift: () => {
        let _r = Math.floor(Math.random() * dummy_videos.length)
        _controller.unshiftNewVideo(dummy_videos[_r])
      }
    }
    let gui = new GUI(_guiC)

    let _playerGui = gui.addFolder('player')
    _playerGui.add(_guiC, 'unshift')

    /*gui.add('startRecord')
    gui.add('startRecord')
    gui.add('endRecord')
    gui.add('upload')
    gui.addNumber('uMixRatio', 0., 1.01, (changedValue) => {
      _uniforms.uMixRatio = changedValue
    })
    gui.addBool('uKeyVideoIndex', (changedValue) => {
      _uniforms.uKeyVideoIndex = (changedValue) ? 1 : 0
    })*/


    function _frameUpdate() {}

    _frameU = _frameUpdate

    window.addEventListener('resize', () => {});

    update()
  }

  init()

  function update() {
    //_frameU()
    window.requestAnimationFrame(update);
  }


}

export default DeuxTube