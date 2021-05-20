<template>
    <div class="rtg content">
        <h1> Temps de Réaction ! </h1>
        <div class="start p-4 d-inline-block">
            <button type="button" class="btn btn-info" @click="startGame" :disabled="isPlaying"> Commencer </button>
            <div v-if="isPlaying" class="chrono m-2">
                {{delay}}
            </div>
        </div>  
        
        <div class="result">
            <Results/>
        </div>
        <div class="blockGame" v-if="isPlaying">
            <Block v-bind:delay='delay' v-bind:isPlaying="isPlaying"/>
        </div>

    </div>
</template>

<script>
import Results from '../../components/game/Results.vue'
import Block from '../../components/game/Block.vue'
export default {
    name : 'ReactTimeGame',
    components: { Results, Block  },
    data () {
        return {
            isPlaying : false,
            delay : null,



        }
    },
    methods : {
        startGame () {
            this.delay = 1000 + Math.random() * 2000; // Entre 2 et 5 secondes
            this.isPlaying = true;
        }
    },

}
</script>

<style>
    .rtg .start {
        width: auto;
        height: auto;
        position: relative;
        border: solid 1px black;
    }
    .rtg .blockGame {
        width: 600px;
        height: 400px;
        position: relative;
        margin: 50px 0 0 0;
        border: solid 1px black;
    }
</style>