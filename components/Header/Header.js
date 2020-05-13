import {DomListener} from '../DomListener/DomListener.js'

export class Header extends DomListener {
  static className = 'header'
  constructor($el) {
    super($el, {
      name:'header',
      listeners : ['click']
    })
  }
  toHTML() {
    return `<h1>Header</h1>`
  }
  onClick(e) {
    console.log(this)
  }
}