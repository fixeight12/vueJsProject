<template>
<p>{{display}} // {{delay}}</p>
  <div class="block" v-if="display"  >
      Clique !
      {{delay}}
      {{display}}
  </div>
</template>

<script>
export default {
    props : [
        'delay',
    ],
    data () {
        return {
            display : false,

        }
    },
    methods : {    },

    mounted () {
        console.log("component mounted");
        setTimeout ( () => {
            this.display = true;
        }, this.delay);
    },
    updated () {
        console.log("updated !")
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