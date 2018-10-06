<template>
 <v-ons-page>
    <v-ons-toolbar>
      <div class="center">{{ msg }}</div>
    </v-ons-toolbar>
    <section style="margin: 16px">
      <v-ons-button modifier="large" style="margin: 6px 0">すたーと</v-ons-button>
    </section>
  </v-ons-page>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'メイン画面だよ'
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
