---
layout: blank
---
<turbo-frame id="pet-qa">
  <form 
  class="flex flex-col items-center py-8 rounded"
  data-controller="dog-weight"
  >
  <label class="text-2xl font-bold text-crema-50">
    ¿Cuánto pesa en kgs?
  </label>
    <input value="0"
    class="input-general"
    type="text" 
    data-dog-weight-target="dogWeight">
    <a
    href="/partials/dog_results.html"
    class="btn-importante bg-gradient-to-tl from-crema-150 to-crema-50 hover:from-crema-100 to-bg-white"
    data-action="click->dog-weight#anotherGreet">
      Continuar
    </a>
  </form>
</turbo-frame>
