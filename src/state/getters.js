export default {
  getNotes(state) {
    return state.notes;
  },
  getCurrentNoteContent(state) {
    return state.currentNote.text;
  }
};