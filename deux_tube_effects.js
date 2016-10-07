
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

//_b = videoEffects.imageDataArrayBuffer
          //_recorder.addFrame(_b)
          //console.log(_b.data.length);

           let _b, _stop = true
    var animationFrame = new AnimationFrame();

    function _frameUpdate() {
      if (!_stop) {
        animationFrame.request((time) => {
          //_b = videoEffects.imageDataArrayBuffer
          //_recorder.addFrame(_b)
          //console.log(_b.data.length);
        });
      }
    }

    _frameU = _frameUpdate

    setTimeout(() => {
      _stop = false
      setTimeout(() => {
        //_recorder.lastFrame(_b)
        //_recorder.addFrame({ frame: _b.data, end: true })
        _stop = true
      }, 20000)
    }, 8000)

    /*let players = vjPlayer.controllers
    console.log(players);

    setTimeout(() => {
      players[0]._nextVideo()
    }, 5000)
*/


'assets/amenothepdf52eed0-500d-11e6-aaf1-4d4553b6d1a3.json',
         'assets/everythingonee973dbe0-500d-11e6-aaf1-4d4553b6d1a3.json'