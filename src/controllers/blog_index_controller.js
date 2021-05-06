import { Controller } from 'stimulus'
import { annotate } from 'rough-notation'

export default class extends Controller {
  static targets = [ "header", "container" ]
  connect() {
    console.log("come on now")
    this.containerTargets.forEach(c =>
      annotate(c, {
      type: 'box', animate: false, color: '#9070af'}).show()
    )

    annotate(this.headerTarget, {
      type: 'underline', color: '#9070af'}).show()
  }
}
