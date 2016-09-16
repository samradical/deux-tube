import { Player, Controller } from '@samelie/dash-player'
import _ from 'lodash'
export default class DeuxPlayer {

  constructor(el, options, v) {
    let controller = new Controller()
    controller.el = el
    let mediaSource = controller.newSource()

    _.forEach(options, (val, key) => {
      mediaSource[key] = val
    })

    this.vjPlayer = new Player(controller)
  }

}
