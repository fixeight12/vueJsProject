<template>
  <h1 class="mb-4"> {{title}} </h1>
  <h4 class="title"> Projet réalisé en 2 jours !</h4>
  <div class="content">
    <List>
      <div class="list" v-for="step in steps" :key="step">
        <div class="d-flex align-items-center input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox"  value="" v-model="step.checked">
            </div>
          </div>
          <div class="form-control" > 
            {{step.title}}
          </div>
          <div class="ms-3 divbtn" v-bind:ref="step.index" > 
            <button type="button" class="btn btn-outline-info btn-sm"  v-on:click="toggleDetail">
              Détails
            </button>
          </div>
        </div>
      </div>
    </List>
  </div>

  <!-- Detail parts -->
  <div v-if="show">
    <Detail  v-on:close="toggleDetail" />
  </div>
  


</template>

<script>
import List from '../components/List.vue'
import Detail from '../components/Detail.vue'

export default {
  name: 'About',
  components: { List,Detail },
  data () {
    return{
      title: "Ma liste d'apprentissage",
      show : false,
      steps : [
        {
            title :"Aller sur le site VueJs" ,
            showDetail : false,
            index: 'step0',
            checked : true,
        },
        {
            title :"Regarder des vidéos pour débutant" ,
            showDetail : false,
            index: 'step1',
            checked : true,

        },
        {
            title :"Essayer de comprendre" ,
            showDetail : false,
            index: 'step2',
            checked : true,
        },
        {
            title :  "Regarder encore des vidéos",
            showDetail : false,
            index: 'step3',
            checked : true,
        },
        {
            title : "Essayer de refaire" ,
            showDetail : false,
            index: 'step4',
            checked : true,
        },
        {
            title :  "Se lancer dans sa propre application !",
            showDetail : false,
            index: 'step5',
            checked : true,
        },
        {
            title :  "M'ameliorer en me donnant un stage",
            showDetail : false,
            index: 'step6',
            checked : false,
        },
      ],

    }
  },
  methods : {
    toggleDetail () {
      this.show = !this.show;
      
      // Pas top mais ça fait le travail
      this.show == true ? this.$refs.step0.style.display = 'none' :  this.$refs.step0.style.display = 'block';
      this.show == true ? this.$refs.step1.style.display = 'none' :  this.$refs.step1.style.display = 'block';
      this.show == true ? this.$refs.step2.style.display = 'none' :  this.$refs.step2.style.display = 'block';
      this.show == true ? this.$refs.step3.style.display = 'none' :  this.$refs.step3.style.display = 'block';
      this.show == true ? this.$refs.step4.style.display = 'none' :  this.$refs.step4.style.display = 'block';
      this.show == true ? this.$refs.step5.style.display = 'none' :  this.$refs.step5.style.display = 'block';
      this.show == true ? this.$refs.step6.style.display = 'none' :  this.$refs.step6.style.display = 'block';

    }
  },

}
</script>

<style>
  .title {
    font-style: italic;
    font-size: 14px;
    font-weight: 600;
  }
</style>