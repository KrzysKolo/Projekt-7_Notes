class MyNots {
  constructor() {
    this.UiSelectors = {
      add: ".add",
      deleteAll: ".delete-all",
      deleteNote: "delete-note",
      note: ".note",
      save: ".save",
      cancel: ".cancel",
    };
  }
  initializeMyNotes() {
    this.addBtn = document.querySelector(this.UiSelectors.add);
    this.deleteAllBtn = document.querySelector(this.UiSelectors.deleteAll);
    this.saveBtn = document.querySelector(this.UiSelectors.save);
    this.cancelBtn = document.querySelector(this.UiSelectors.cancel);

    this.deleteNoteBtn = document.getElementsByClassName(
      this.UiSelectors.deleteNote
    );
    addEventListeners();
  }
  addEventListeners() {
    this.addBtn;
  }
}
