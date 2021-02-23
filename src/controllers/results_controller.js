import { Controller } from 'stimulus'
import { get, set } from 'idb-keyval'

export default class extends Controller {
  static targets = ["weightOutput", "nameOutput"]
  static values = {
    weight: Number,
    name: String
  }
  connect(){
    get('dogWeight')
      .then((weight)=> {
        get('dogName')
          .then((name)=> {
            this.weightValue = weight
            this.nameValue = name
            this.weightOutputTarget.textContent = `${this.calculate()}`
            this.nameOutputTarget.textContent = `${this.nameValue}`
          })
      })
  }
  
  calculate() {
    return this.weightValue * 2
  }

}
