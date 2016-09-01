import dat from 'dat-gui'

let GUI = new dat.GUI()

export default class G {
  constructor(_uniforms) {
    this._uniforms = _uniforms
  }

  addNumber(str, min, max, callback) {
    GUI.add(this._uniforms, str, min, max).onChange(callback)
  }

  addBool(str, callback){
    GUI.add(this._uniforms, str).onChange(callback)
  }
}
