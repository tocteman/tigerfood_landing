import { Controller } from 'stimulus'
import { annotate } from 'rough-notation'

export default class extends Controller {
  static targets = [ "header", "container" ]
  initialize() {
    annotate(this.containerTarget, {
      type: 'box', animate: false, color: '#9070af'}).show()
    annotate(this.headerTarget, {
      type: 'underline', color: '#9070af'}).show()
  }
}
