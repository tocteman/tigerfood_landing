import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = ["phone" ]
  highlight(){
    const resaltado = annotate(this.phoneTarget, {type: 'circle', color: '#9070af'})
    resaltado.show()
    setTimeout(() => resaltado.hide(), 2500)
  }
}
