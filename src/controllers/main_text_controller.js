import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = ["ratherKitchen" ]
  initialize(){
    console.log("initialized")
    const element = this.ratherKitchenTarget
    const annotation = annotate(element, {type: 'underline', color: '#9070af'})
    annotation.show()
  }
}
