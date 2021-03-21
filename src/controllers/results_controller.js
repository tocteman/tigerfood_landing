import { Controller } from 'stimulus'
import { get} from 'idb-keyval'
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = ["weightOutput", "nameOutput"]
  static values = {
    weight: Number,
    name: String
  }
  connect(){
    console.log("wtf")
    get('dogWeight')
      .then((weight)=> {
        get('dogName')
          .then((name)=> {
            this.weightValue = weight
            this.nameValue = name
            this.weightOutputTarget.textContent = `${this.calculateFinal(weight)} kgs`
            this.nameOutputTarget.textContent = `${this.nameValue}`
            const annotation = annotate(this.weightOutputTarget, {type: 'underline', color: '#eedadf' })
            annotation.show()
          })
      })
      .catch(err => console.log(err))
  }

  calculateFinal(w) {
    const d = this.calculateDaily(w)
    return Math.round((d*14)/1000)
  }

  calculateDaily(n) {
    return n <= 2 ? 50             :
    n === 3?   90                  :
    n < 10 ?   90 + ((10-n) * 14)  :
    n < 20 ?  188 + ((n-10) * 12)  :
    n < 40 ?  308 + ((n-20) * 14)  :
              574 + ((n-39) * 16)
  }


}
