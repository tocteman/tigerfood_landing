import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = ["phone", "whatsappNumber" ]
  connect(){
    this.whatsappNumberTarget.href =/Mobi/.test(navigator.userAgent) ?
      "whatsapp://send?text=&phone=+593998478479" :
      "/#footer"
  }
  highlight(){
    const resaltado = annotate(this.phoneTarget, {type: 'circle', color: '#6EE7B7'})
    resaltado.show()
    setTimeout(() => resaltado.hide(), 2500)
  }
}
