import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = ["phone", "whatsappNumber", "greatDivider"]
  connect(){
    annotate(this.greatDividerTarget, {type: 'underline', color: '#9070af'}).show()
    this.whatsappNumberTarget.href =/Mobi/.test(navigator.userAgent) ?
      "whatsapp://send?text=&phone=+593998478479" :
      "/#footer"
  }
  highlight(){
    annotate(this.phoneTarget, {type: 'circle', color: '#6EE7B7'}).show()
    setTimeout(() => resaltado.hide(), 2500)
  }
}
