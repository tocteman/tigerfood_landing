import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = [ "selectFood", "conejo", "thePit" ]
  connect() {
    annotate(this.selectFoodTarget, {type: 'underline', color: '#eedadf' }).show()
  }


}
