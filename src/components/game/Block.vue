<template>
  <div class="block" v-if="display"  v-on:load ="displayBlock" >
      Clique !
      {{delay}}
      {{roundedDelay}}
      {{isPlaying}}
  </div>
</template>

<script>
export default {
    props : [
        'delay',
        'isPlaying'
    ],
    data () {
        return {
            roundedDelay : Math.round(this.delay),
            display : true,

        }
    },
    methods : {
        displayBlock () {
            setTimeout (function () {
                //this.display = true;
                console.log("HELLLLLLLLLOOOOOOOO")
            } , this.roundedDelay);

        }
    }

}
</script>

<style>
    .block {
        width: 150px;
        border-radius: 20px;
        background: #1E88E5;
        padding: 50px 0;
        margin: 40px auto;

    }
</style>