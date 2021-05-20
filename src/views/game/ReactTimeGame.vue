<template>
  <div class="rtg content">
      <h1> Temps de Réaction ! </h1>
      <div class="result">
          <Results/>
      </div>
      <div class="blockGame">
          <Block/>
      </div>

  </div>
</template>

<script>
import Results from '../../components/game/Results.vue'
import Block from '../../components/game/Block.vue'
export default {
    name : 'ReactTimeGame',
    components: { Results, Block  },


}
</script>

<style>
    .rtg .result {
        width: auto;
        height: auto;
        position: relative;
        border: solid 1px black;
    }
</style>