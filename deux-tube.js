//import GUI from './vj/utils/GUI';
//import { Emitter } from './vj/utils';
import { Player, Controller } from '@samelie/dash-player'
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
  var vjPlayer, videoCanvases, vj, midi, recorder

  function init(audioData) {
    let controller = new Controller()
    controller.el = appEl
    let mediaSource = controller.newSource()
    mediaSource.noAutoStart = false
    mediaSource.videoWidth = 640
    mediaSource.videoHeight = 460
    mediaSource.verbose = true
    mediaSource.noVideoCanvas = true
    mediaSource.video = true
    mediaSource.elAttributes.muted = true
    mediaSource.jsonUrls = [
      'assets/amenothepdf52eed0-500d-11e6-aaf1-4d4553b6d1a3.json',
      'assets/everythingonee973dbe0-500d-11e6-aaf1-4d4553b6d1a3.json'
    ]

    vjPlayer = new Player(controller)
    let players = vjPlayer.controllers
    console.log(players);

    setTimeout(()=>{
      players[0]._nextVideo()
    },5000)

    window.addEventListener('resize', () => {});

    update()
  }

  init()

  function update() {
    window.requestAnimationFrame(update);
  }


}

export default DeuxTube
