import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = [ "selectFood", "conejoFood", "thePit" ]
  connect() {
    annotate(this.selectFoodTarget, {type: 'underline', color: '#eedadf' }).show()
    const pitElement = this.thePitTarget
    console.log("the Pit Element:")
  }


}
