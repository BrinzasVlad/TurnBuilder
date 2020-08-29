<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/specify">Game Specification</router-link> |
      <router-link to="/playtest">Game Playtesting</router-link>
    </div>
    <router-view id="page" />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  box-sizing: border-box;
  padding: 20px;
  height: 15vh;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#page {
  height: 85vh;
  overflow: auto;
}

/** Preserves whitespace as written, wraps text normally */
.keep-whitespace {
  white-space: pre-wrap;
}

/** Displays child components horizontally in a row */
.display-row {
  display: flex;
  flex-direction: row;

  vertical-align: middle;
  align-items: center;
}

/* TODO: make v-select width actually look like something; maybe used fixed-min-width v-selects? */
.v-select .vs__selected {
  margin: 1px 2px;
}

.v-select .vs__dropdown-toggle {
  padding: 0;
}

.v-select .vs__search {
  margin: 0;
}

.v-select .vs__search:focus {
  margin: 0;
}

.v-select .vs__actions {
  padding: 0 6px 0 3px;
}
</style>
