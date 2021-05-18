<template>
    <div class="backdrop" v-on:click.self="closeDetail">
        <div class="detail">
            <h3> Sources </h3>
            
            <div class="card w-75 m-2 d-inline-block align-middle" style="width: 12rem;" v-for="source in sources" :key="source">
                <img :src="source.img" class="card-img-top" :alt="source.name">
                <div class="card-body">
                    <a :href="source.url" class="link-primary">{{source.name}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Detail',
    methods : {
        closeDetail() {
            this.$emit('close')
        }
    },
    data () {
        return {
            title : 'Différentes sources :',
            sources : [
                {
                    name : 'VueJS',
                    img : "../assets/logo.png",
                    url : 'https://vuejs.org/index.html',
                },
                {
                    name : 'The Net Ninja (chaine youtube)',
                    img : '../assets/netninja.jpg',
                    url : 'https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg',
                },
                {
                    name : 'Bootstrap',
                    img : 'bootstarp.jpg',
                    url : 'https://getbootstrap.com/',
                },

            ],
        }
    }

}
</script>

<style>
.detail {
    width: 75%;
    height: auto;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
}
.backdrop {
    top: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
}
.detail h1 {
    color : #03cfb4;
    border : none;
    padding: 0;
}

.detail .image-parent {
  max-width: 40px;
}
</style>