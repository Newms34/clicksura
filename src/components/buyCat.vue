<template>
<div class="column is-half">
  <div class='notification item-btn'>{{title}} costs {{initCost}}, goes up {{costMult}}% each time, desc was {{desc}}</div>
</div>
</template>

<script>
export default {
  name: 'buyCat',
  props: {
    title: String,
    initCost: Number,
    costMult: Number,
    desc: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-btn{
  background: #7f2aff;
  cursor: pointer;
  color:#fff;
  transition-duration: .2s;
}
.item-btn:hover{
  background:#9148ff;
}
</style>
