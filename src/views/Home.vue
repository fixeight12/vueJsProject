<template>
  <h1> {{title}} </h1>
  <div class="content" ref="content">
    <div class="input-group mb-3">
      <label class="input-group-text" id="basic-addon1"> Que devez vous faire ?</label>
      <input type="text" class="form-control" placeholder="à vous"  v-model="element">
      <button  type="button" class="btn btn-success" @click="addElement"> Ajouter </button>
    </div>
    <List>
      <div class="list" v-for="data in toDoList" :key="data">
        <div class="d-flex align-items-center input-group mb-3">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="checkbox"  value="">
            </div>
          </div>
          <div class="form-control" > 
            {{data.title}}
          </div>
          <div class="ms-3 divbtn" > 
            <button type="button" class="btn btn-outline-warning btn-sm"  v-on:click="removeElement(data)">
              Supprimmer
            </button>
          </div>
        </div>
      </div>
    </List>
  </div>
</template>

<script>
import List from '../components/List.vue'

export default {
  name: 'Home',
  components: { List,  },
  data () {
    return {
      title : "Liste à faire :",
      element : "",
      toDoList : [
        {
          title : 'Tâche 1',
          id : 0,
        }
      ],
    }
  },
  methods : {
    addElement () {
      var element = {title : this.element, id: this.toDoList.length};
      this.toDoList.push(element);
    },
    removeElement(element) {
      // Echange de place entre le dernier element et l'element à supprimer
      this.toDoList[element.id] = this.toDoList[this.toDoList.length - 1];
      this.toDoList[this.toDoList.length - 1] = element;
      // Change l'id pour qu'il corresponde à sa place
      this.toDoList[element.id].id = element.id;
      //Suppression de l'élément
      this.toDoList.pop();

    }
  },
}
</script>

<style>
 
</style>
