<template>
  <div id="nav">
    <router-link :to="{name : 'ToDoList'}">To Do List</router-link> |
    <router-link :to="{name : 'LearningList'}">Learning List</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #030303;
}

#nav a.router-link-exact-active {
  color: white;
  background: #0679bb;
  padding: 10px;
  border-radius: 5px;

}

.list {
    width: 500px;
    padding: 20px;
    margin: 10px auto;
    background: white;
    border-radius: 10px;
    border: 1px solid black;
  }
  
h1,h3 {
  color : #0679bb;
  border : none;
  margin: 10px auto auto;
}
 .content {
    display: inline-block;
    justify-content: center;
    margin: 25px auto 10px;;
    padding: 10px;
    
  }
</style>
