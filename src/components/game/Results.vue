<template>
  <div class="start p-4">
      <button type="button" class="btn btn-info" @click="startGame"> Commencer </button>
      <div class="chrono">
        
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            

        }
    },
    methods : {
        startGame () {
            tBegin =  new Date().getTime;
            //this.startTime = tBegin;
        }
    },
}
</script>

<style>

</style>