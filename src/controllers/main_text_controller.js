import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = ["ratherKitchen", "pricingHeader" ]
  initialize(){
    annotate(this.ratherKitchenTarget, {type: 'underline', color: '#9070af'}).show()
    annotate(this.pricingHeaderTarget, {type: 'underline', color: '#eedadf'}).show()
  }
}
