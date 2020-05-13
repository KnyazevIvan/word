import {DomListener} from '../DomListener/DomListener.js'

export class Toolbar extends DomListener {
  static className = 'toolbar'
  constructor($el) {
    super($el, {
      name:'toolbar',
      listeners : ['dblclick']
    })
  }
  toHTML() {
    return `<h1>Toolbar</h1>`
  }
  onDblclick(e) {
    console.log(e)
  }
}