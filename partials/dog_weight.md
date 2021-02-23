---
layout: blank
---
<h1>Editing message</h1>

<turbo-frame id="pet-qa">
  <form 
  class="flex flex-col items-center py-8 rounded"
  data-controller="dog-weight"
  >
  <label class="text-crema-50 font-bold text-2xl">
    ¿Cuánto pesa en kgs?
  </label>
    <input value="0"
    class="w-4/5 md:w-1/3 px-4 py-2 my-4 text-lg font-bold rounded shadow bg-crema-100 border-2 border-transparent focus:bg-white focus:border-crema-50"
    type="text" 
    data-dog-weight-target="dogWeight">
    <a
    href="/partials/dog_results.html"
    class="w-3/5 md:w-1/5 px-4 my-4 py-2 text-xl font-bold text-center rounded shadow bg-gradient-to-tl from-crema-150 to-crema-50 hover:from-crema-100 to-bg-white border-transparent hover:border-yellow-50 border-2"
    data-action="click->dog-weight#anotherGreet">
      Continuar
    </a>
  </form>
</turbo-frame>
