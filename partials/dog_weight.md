---
layout: blank
---
<h1>Editing message</h1>

<turbo-frame id="pet-qa">
  <form 
  class="flex flex-col items-center "
  data-controller="hello"
  >
  <label class="text-crema-50">
    ¿Cuánto pesa en kgs?
  </label>
    <input value="0"
    class="w-1/3 px-4 py-2 my-4 text-lg font-bold rounded shadow"
    type="text" 
    data-hello-target="dogWeight">
    <a
    href="/partials/dog_results.html"
    class="px-4 py-2 font-bold rounded shadow bg-crema-100 hover:bg-crema-50 border-crema-25 hover:border-crema-50"
    data-action="click->hello#anotherGreet">
      Continuar
    </a>
  </form>
</turbo-frame>
