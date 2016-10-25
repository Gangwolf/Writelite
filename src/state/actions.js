export default {
  addNote({ commit, state }, text) {
    commit('ADD_NOTE', text);
  },
  deleteNote({ commit, state }, payload) {
    commit('DELETE_NOTE');
  },
  editNote({ commit, state }, editor) {
    commit('EDIT_NOTE', editor.target.value);
  },
  selectCurrentNote({ commit, state }, note) {
    commit('SELECT_CURRENT_NOTE', note);
  }
};
