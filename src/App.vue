<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-menu">
        <div class="navbar-start nav">
           <router-link class='navbar-item' to="/">Home</router-link>
            <router-link class='navbar-item' to="/about">About</router-link>
        </div>
      </div>
    </nav>
    {{testThing}}
    <router-view />
  </div>
</template>

<style>
@import '../node_modules/bulma/css/bulma.css';
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
