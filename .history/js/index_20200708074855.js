class MyNots {
  constructor() {
    this.UiSelectors = {
      add: ".add",
      deleteAll: ".delete-all",
      deleteNote: "delete-note",
      note: ".note",
    };
  }
  initializeMyNotes() {
    this.addBtn = document.querySelector(this.UiSelectors.add);
    addEventListeners();
  }
  addEventListeners() {}
}
