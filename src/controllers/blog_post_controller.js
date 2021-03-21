import {Controller} from 'stimulus'
import { annotate } from 'rough-notation'


export default class extends Controller {
  static targets = [ "title" ]
  initialize() {
    annotate(this.titleTarget, {
      type: 'underline', color: '#9070af'}).show()
  }
}
