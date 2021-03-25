import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "topbar" ]


  initialize(){
    const topbarClass = this.topbarTarget.classList
    const sticky = 800
    topbarClass.add("hidden-menu")
    window.onscroll = () => { 
      if (window.pageYOffset >=sticky) {
        topbarClass.add("sticky-menu") 
        topbarClass.remove("hidden-menu")
      } else {
        topbarClass.remove("sticky-menu")
        topbarClass.add("hidden-menu")
      }
    }

      }

 }
