<template>
  <div id="editor-box">
    <textarea id="editor" @input="edit" :value="noteContent" placeholder="Write…"></textarea>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Editor',
  computed: {
    ...mapGetters({
      noteContent: 'getCurrentNoteContent'
    })
  },
  methods: {
    ...mapActions({
      edit: 'editNote'
    })
  }
};
</script>

<style scoped>
#editor {
  float: right;
  position: relative;
  padding-top: 3.3%;
  padding-right: 20%;
  background-color: transparent;
  font-size: 24px;
  word-wrap: break-word;
  white-space: pre-wrap;
  overflow: auto;
  outline: none;
  border: none; 
  resize: none;
  height: 100vh;
  width: 80vw;
}
</style>