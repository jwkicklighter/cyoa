<template>
  <div id="app" v-bind:style="{background: bg}">
    <div class="navbar">
      <div class="navbar-a-wrapper">
        <a v-for="link in links" :href="link.href">{{ link.name }}</a>
      </div>
    </div>
    <div class="page">
      <router-view @set-background="setBackground"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bg: defaultBg,
      links: [
        {
          name: 'Game',
          href: '#'
        },
        {
          name: 'About',
          href: '#about'
        },
        {
          name: 'Bio',
          href: '#bio'
        }
      ]
    }
  },
  methods: {
    setBackground: function (bg) {
      this.bg = bg || defaultBg
    }
  }
}

var defaultBg = 'url("static/gray.png")'
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  transition: background 1s ease-in-out;
  animation: animateBackground 50s linear infinite;
}

h1 {
  font-size: 1.8em;
}

p {
  font-size: 1em;
}

h1, p {
  margin-bottom: 20px;
}

h4 {
  margin-bottom: 40px;
  margin-top: -10px;
}

.page {
  background-color: #fcfcfc;
  box-shadow: 0 1px 3px rgba(33, 33, 33, 0.4);
  margin: 20px auto;
  padding: 20px;
  width: 70%;
}

@keyframes animateBackground {
  0%   { background-position: 0 0; }
  100% { background-position: 100% 100%; }
}

.navbar {
  background-color: #87CEEB;
  box-shadow: 0 1px 2px rgba(33, 33, 33, 0.4);
  height: 46px;
  width: 100%;
}

.navbar-a-wrapper {
  margin: 0 auto;
  text-align: left;
  width: 70%;
}

.navbar a {
  color: #fcfcfc;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  padding: 7px 20px 6px;
  text-decoration: none;
}
.navbar a:hover {
  background-color: rgba(0, 0, 100, 0.1);
}
</style>
