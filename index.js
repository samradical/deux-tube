import DeuxTube from './deux-tube'
let _britshPate
if (document.body) {
  _init();
} else {
  window.addEventListener('DOMContentLoaded', _init);
}


function _init() {
  _britshPate = new DeuxTube()
}
