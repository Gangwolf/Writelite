<template>
  <div id="app">
    <Entries></Entries>
    <Editor></Editor>
  </div>
</template>

<script>
import Entries from './components/Entries.vue'
import Editor from './components/Editor.vue'

window.onbeforeunload = _ => false;

export default {
  components: {
    Entries,
    Editor
  }
};
</script>

<style>
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  font-family: Georgia, serif;
  -webkit-overflow-scrolling: touch;
  background-color: rgb(252, 252, 252);
}

::-moz-selection {
  background-color: rgba(255, 255, 0, .5);
}

::selection {
  background-color: rgba(255, 255, 0, .5);
}

::-webkit-scrollbar {
  width: .5em;
}

::-webkit-scrollbar-track-piece {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(50, 50, 50, .4);
}
</style>
