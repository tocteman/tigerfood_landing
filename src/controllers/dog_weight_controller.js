import { Controller } from "stimulus"
import { annotate } from "rough-notation"
import { get, set } from 'idb-keyval'


export default class extends Controller {
  static targets = [ "name", "dogWeight"]
  static values = {
    weight: Number
  }
  initialize() {
    const element = this.nameTarget
    const annotation = annotate(element, {type: 'underline'})
    annotation.show()
    const name = element.value
    // console.log(window.hotwiredTurbo)
  }

  anotherGreet() {
    this.weightValue = Number(this.dogWeightTarget.value)
    set('dogWeight', this.weightValue)
  }

  weightValueChanged(){
    console.log("here's when it changes")
    console.log(this.weightValue)
  }

  getWeight() {
    console.log(this.weightValue)
  }

}
