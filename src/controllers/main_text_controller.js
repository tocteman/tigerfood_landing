import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = ["ratherKitchen" ]
  initialize(){
    annotate(this.ratherKitchenTarget, {type: 'underline', color: '#9070af'}).show()
  }
}
