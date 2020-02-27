<template>
  <div class="home">
    <!-- {{els}} -->
    <div class="is-fullwidth columns">
      <div class="column is-one-fifth"></div>
      <div class="column is-three-fifths">
        <div class="is-fullwidth columns is-multiline is-5 is-variable">
          <buyCat
            v-bind:title="el.title"
            v-bind:initCost="el.initCost"
            v-bind:costMult="el.costMult"
            v-bind:currCost="el.currCost"
            v-bind:desc="el.desc"
            v-bind:key="el.title"
            v-for="el in els"
            v-on:click.native='buyThing(el)'
          />
        </div>
        <br>
        {{els.map(q=>`${q.title} - ${q.numBought}`)}}: {{currFunds}}
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import buyCat from '@/components/buyCat.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      currFunds:100,
      els: [
        { title: 'cat1', initCost: 100, costMult: 1.34, desc: '(N/A)', currCost:null, numBought:0},
        { title: 'cat2', initCost: 1, costMult: 1.05, desc: '(N/A)', currCost:null, numBought:0},
        { title: 'cat3', initCost: 50, costMult: 1.2, desc: '(N/A)', currCost:null, numBought:0},
        { title: 'cat4', initCost: 20, costMult: 1.2, desc: '(N/A)', currCost:null, numBought:0}
      ]
    }
  },
  created:function () {
    this.els.forEach(el=>{
      el.currCost = el.initCost;
    });
    console.log(this.els)
    // console.log('bulmabox',bulmabox)
    // this.buyThing(this.els[0])
  },
  methods: {
    buyThing (el) {
      if(this.currFunds<el.currCost){
        return bulmabox.alert("Insuficient funds", "You don't have enough money to buy that.")
      }
      this.currFunds -= el.currCost;
      el.currCost*=el.costMult;
      el.numBought++;
      console.log('user clicked', el)
    }
  },
  components: {
    buyCat
  }
}
</script>
