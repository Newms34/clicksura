<template>
  <div class='home'>
    <!-- {{els}} -->
    <div class='is-fullwidth columns'>
      <div class='column is-one-fifth'></div>
      <div class='column is-three-fifths columns is-multiline'>
        <div class='notification is-link column is-half' v-bind:key='el' v-for='el in els'>{{el}}</div>
      </div>
    </div>
    <HelloWorld msg='Hallo skwerls' />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: function () {
    return {
      els: ['Lab', 'Skritt', 'Golems', 'Krewe']
    }
  },
  components: {
    HelloWorld
  }
}
</script>
