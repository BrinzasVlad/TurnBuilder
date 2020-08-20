<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/specify">Game Specification</router-link> |
      <router-link to="/playtest">Game Playtesting</router-link>
    </div>
    <router-view />
  </div>
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/** Preserves whitespace as written, wraps text normally */
.keep-whitespace {
  white-space: pre-wrap;
}

/** Displays child components horizontally in a row */
.display-row {
  display: flex;
  flex-direction: row;
}
</style>
