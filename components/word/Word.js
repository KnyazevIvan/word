export class Word {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components
    this.Components = []
  }
  getRoot() {
    const $root = document.createElement('div')
    $root.classList.add('word')
    for (const Component of this.components) {
      const $el = document.createElement('div')
      $el.classList.add(Component.className)
      const component = new Component($el)
      $el.innerHTML = component.toHTML()
      $root.append($el)
      this.Components.push(component)
    }
    return $root
  }
  render() {
    this.$el.append(this.getRoot())
    this.Components.forEach(component =>component.initDOMListener());
  }
}