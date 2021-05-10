import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = [ "selectFood", "conejo", "thePit" ]
  connect() {
    annotate(this.selectFoodTarget, {type: 'underline', color: '#eedadf' }).show()
    fetch("https://tigerfood.netlify.app/partials/food_type/conejo")
      .then(()=> console.log("ok"))
      .catch(err => console.log(err))
  }


}
