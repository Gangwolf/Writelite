export default {
  ADD_NOTE(state, text) {
    const nowNote = { text };
    state.notes.push(nowNote);
    state.currentNote = nowNote;
  },
  DELETE_NOTE(state, payload) {
    const nowNote = state.notes.indexOf(state.currentNote);
    state.notes.splice(nowNote, 1);
    state.currentNote = state.notes[0];
  },
  EDIT_NOTE(state, text) {
    state.currentNote.text = text;
  },
  SELECT_CURRENT_NOTE(state, note) {
    state.currentNote = note;
  }
};