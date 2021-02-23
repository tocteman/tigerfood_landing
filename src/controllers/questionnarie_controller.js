import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = [ "calculateHow" ]
  connect() {
    const element = this.calculateHowTarget
    const annotation = annotate(element, {type: 'underline', color: '#eedadf' })
    annotation.show()
  }
}
