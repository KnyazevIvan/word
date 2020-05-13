export class DomListener {
  constructor(node, options) {
    this.$el = node
    this.name = options.name||''
    this.listeners = options.listeners
  }
  initDOMListener() {
    for (const listener of this.listeners) {
      this.$el.addEventListener(listener, this[getMethodName(listener)])
    }
  }
}

function getMethodName(name) {
  return 'on'+ name.charAt(0).toUpperCase()+name.slice(1);
}