import { Controller } from "stimulus"
import {lottie} from "lottie-web"

export default class extends Controller {
    static targets = [ "animation" ]
    connect() {
    lottie.loadAnimation({
        container: element, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets2.lottiefiles.com/packages/lf20_gebhml4o.json' // the path to the animation json
    });
    }


}
