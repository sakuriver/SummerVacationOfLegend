<template>
 <v-ons-page>
   <v-ons-tabbar>
     <router-view slot="pages"></router-view>
     <v-ons-tab v-for="name in ['Main', 'Title']" :key="name"
                :label="name"
                :active="$route.name === name"
                @click.prevent="$router.push({name})"
     ></v-ons-tab>
   </v-ons-tabbar>
    <v-ons-toolbar>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>
    <section style="margin: 16px">
      <v-ons-button modifier="large" @click="pushMain" style="margin: 6px 0">すたーと</v-ons-button>
    </section>
  </v-ons-page>
</template>

<script>
export default {
  name: 'Title',
  data () {
    return {
      msg: '伝説の夏休み  ~あの親子対決が再び~'
    }
  },
  methods: {
    pushMain(e) {
      this.$router.push('Main')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
