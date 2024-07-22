<script setup lang="ts">
defineProps<{
  msg: string
}>()

// window.addEventListener("chatwoot:ready", function () {
//   console.log('ready')
//   // window.$chatwoot.setCustomAttributes({
//   //   hash: "bb55f5c5-67c6-4ca9-8050-ac6b2979c6f3",
//   // });
//
//   console.log(window.$chatwoot)
// });
// console.log(window.$chatwoot)

console.log(window.$chatwoot)
//
// window.$chatwoot.reset();
//
window.addEventListener("chatwoot:on-message", function (e) {
  console.log("chatwoot:on-message", e);

  console.log(window.$chatwoot)

  // window.$chatwoot.setConversationCustomAttributes({
  //   area_abbreviation: 'FE',
  //   product_abbreviation: "GADE",
  //   matomo_hash: "123456789-789456123-93682741"
  // });


});

window.addEventListener("chatwoot:on-start-conversation", function (e) {
  console.log(e)

  console.log("dios estas ahi?");

  if(e.detail.hasConversation) {
    window.$chatwoot.reset()

    //Aqui te se abre el modal de seleccion de area y programa :)
  }

  console.log("aqui estoy");
});

window.addEventListener("chatwoot:ready", function (e) {
  console.log("dios estas ahi?");

  console.log("no");
});

window.addEventListener("chatwoot:on-resolved", function (e) {
  console.log("chatwoot:on-resolved", e);
  // window.$chatwoot.reset();
});
//
// window.addEventListener('load', function () {
//   console.log("It's loaded!")
//   // let hola = document.querySelectorAll(".header-wrap")
//   //
//   // console.log(hola);
//
//   let test = document.getElementById("chatwoot_live_chat_widget")
//
//   console.log(test)
// })

// window.$chatwoot.setCustomAttributes({
//   product_abbreviation: "bb55f5c5-67c6-4ca9-8050-ac6b2979c6f3",
// });



function setGade(){
  console.log('gade')
  window.$chatwoot.setConversationCustomAttributes({
    area_abbreviation: 'FE',
    product_abbreviation: "FPMME",
    matomo_hash:"456789132",
    furriel_hash:"test_hash"
  });

  window.$chatwoot.setCustomAttributes({
    country: "EC",
  });
}

function setGND(){
  console.log('GND')
  window.$chatwoot.setConversationCustomAttributes({
    area_abbreviation: 'FE',
    product_abbreviation: "GND",
    matomo_hash:"456789132",
    furriel_hash:"test_hash"
  });

  window.$chatwoot.setCustomAttributes({
    country: "EC",
  });
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <button @click="setGade">Test programa GADE</button>
    <button @click="setGND">Test programa GND</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
