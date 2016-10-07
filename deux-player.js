import { Player, Controller } from '@samelie/dash-player'
import _ from 'lodash'
export default class DeuxPlayer {

  constructor(options) {
    this.controller = new Controller({el:options.el})
  }	

  addSource(options){
  	this.controller.addSource(options)
  }

  start(){
  	this.vjPlayer = new Player(this.controller)
  	return this.vjPlayer
  }

}
