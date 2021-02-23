import { Controller } from 'stimulus'
import { get, set } from 'idb-keyval'
import { annotate } from "rough-notation"

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
            this.weightOutputTarget.textContent = `${this.calculate()} kgs`
            this.nameOutputTarget.textContent = `${this.nameValue}`
            const annotation = annotate(this.weightOutputTarget, {type: 'underline', color: '#eedadf' })
            annotation.show()
          })
      })
  }
  
  calculate() {
   if (this.weightValue < 15) {
     return 8
   } else return 12
  }

}
