
import { Controller } from "stimulus"
import { annotate } from "rough-notation"
import { get, set } from 'idb-keyval'

export default class extends Controller {
  static targets = [ "dogName"]
  static values = {
    name: String
  }
  initialize() {
    const element = this.nameTarget
    const annotation = annotate(element, {type: 'underline'})
    annotation.show()
    const name = element.value
    // console.log(window.hotwiredTurbo)
  }

  submission() {
    this.nameValue = this.dogNameTarget.value
    console.log(this.nameValue)
    set('dogName', this.nameValue)
  }

}
