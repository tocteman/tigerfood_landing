import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = [ "selectFood" ]
  connect() {
    console.log("initialized")
    const element = this.selectFoodTarget
    const annotation = annotate(element, {type: 'underline', color: '#eedadf' })
    annotation.show()
  }
}
