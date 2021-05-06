import { Controller } from "stimulus"
import { annotate } from "rough-notation"
import { get, set } from 'idb-keyval'


export default class extends Controller {
  static targets = ["name", "dogWeight"]
  static values = {
    weight: Number
  }
  anotherGreet() {
    this.weightValue = Number(this.dogWeightTarget.value)
    set('dogWeight', this.weightValue)
  }
}
