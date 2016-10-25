<template>
  <div id="entries">
    <aside>
      <span v-show="noteContent" id="add-note" @click="add('New note')">+</span>
      <ul id="note-list">
        <li v-for="note in notes">
          <a href="javascript:void(0);" id="note-title" @click="selectNote(note)">
            {{ note && note.text ? /[^\s].{0,30}/.exec(note.text)[0] : deleteEmptyNote() }}
          </a>
          <span v-if="notes.length > 1" id="delete-note" @click="selectNote(note), deleteNote()">-</span>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { greeting } from './greeting.js';

export default {
  name: 'Entries',
  created() {
    this.$store.dispatch('addNote', greeting);
  },
  computed: {
    ...mapGetters({
      notes: 'getNotes',
      noteContent: 'getCurrentNoteContent'
    })
  },
  methods: {
    ...mapActions({
      add: 'addNote',
      deleteNote: 'deleteNote',
      selectNote: 'selectCurrentNote'
    }),
    deleteEmptyNote() {
      if (this.$store.state.notes.length > 1) {
        this.$store.dispatch('deleteNote');
      }
    }
  }
};
</script>

<style scoped>
#entries {
  float: left;
  position: fixed;
  width: 20vw;
  height: 100vh; 
  overflow: auto; 
  /* reverse scrollbar position */
  direction:rtl;
}

aside {
  /* reverse content direction */
  direction: ltr;
}

#add-note {
  position: relative;
  padding: 8px 18px;
  cursor: pointer;
  display: block;
}

#note-list {
  list-style: none;
}

#note-title {
  font-weight: 700;
  font-size: 16px;
  font-family: sans-serif;
  text-decoration: none;
  color: rgb(68, 68, 68);
  cursor: pointer;
}
</style>