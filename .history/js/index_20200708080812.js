class MyNots {
  constructor() {
    this.UiSelectors = {
      add: ".add",
      deleteAll: ".delete-all",
      deleteNote: "delete-note",
      note: ".note",
      save: ".save",
      cancel: ".cancel",

      noteArea: ".note-area",
      notePanel: ".note-panel",
      category: "#category",
      textArea: "#text",
      error: ".error",
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

    this.NoteArea = document.querySelector(this.UiSelectors.noteArea);
    this.PanelArea = document.querySelector(this.UiSelectors.panelArea);
    this.Category = document.querySelector(this.UiSelectors.category);
    this.TextArea = document.querySelector(this.UiSelectors.textArea);
    console.log("berek");

    addEventListeners();
  }
  addEventListeners() {
    this.addBtn;
  }
}
