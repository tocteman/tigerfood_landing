import { Controller } from "stimulus"
import { annotate } from "rough-notation"

export default class extends Controller {
  static targets = [ "tigre", "title" ]
  initialize() {
    const element = this.tigreTarget
    const telement = this.titleTarget
    const titleAnnotation = annotate(
      element, {type: 'box', color: '#f5e7ea', animationDuration: 1500}
    )
    const annotation = annotate(telement, {type: 'box', color: '#eedadf', animationDuration: 2000 })
    if (titleAnnotation && annotation) {
      titleAnnotation.show()
      annotation.show()
    }
  }
}
