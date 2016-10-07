import GUI from './GUI';
import _ from 'lodash'
import VideoEffects from '@samelie/video-effects'
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
    value: 0.01
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


export default class DeuxEffects {

  constructor(el1, el2, options = { width: 640, height: 360, fullscreen: false }) {
    let videoEffects = new VideoEffects(
      document.getElementById('gl'),
      document.getElementById('c'),
      el1,
      el2,
      options
    )
    let _uniforms = videoEffects.setUniforms(_o)

    let _guiC = {
      uMixRatio: _o.uMixRatio.value,
    }

    let gui = new GUI(_guiC)
    gui.addNumber('uMixRatio', 0., 1.01, (changedValue) => {
      _uniforms.uMixRatio = changedValue
    })
  }

  addSource(options) {}

  start() {}

}