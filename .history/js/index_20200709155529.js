class MyNotes {
  constructor() {
    this.selectedValue;
    this.cardId = 0;

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
    this.NotePanel = document.querySelector(this.UiSelectors.notePanel);
    this.Category = document.querySelector(this.UiSelectors.category);
    this.TextArea = document.querySelector(this.UiSelectors.textArea);
    this.Error = document.querySelector(this.UiSelectors.error);
    console.log("berek");

    this.addEventListeners();
  }
  addEventListeners() {
    this.addBtn.addEventListener("click", () => this.openPanel());
    this.cancelBtn.addEventListener("click", () => this.closePanel());
    this.saveBtn.addEventListener("click", () => this.saveNote());
  }

  openPanel() {
    this.NotePanel.style.display = "flex";
  }
  closePanel() {
    (this.NotePanel.style.display = "none"),
      (this.Error.style.visibility = "hidden"),
      (this.TextArea.value = "");
    this.Category.selectedIndex = 0;
  }

  saveNote() {
    console.log("zapisujemy notatkę");
    if (this.TextArea.value !== "") {
      this.Error.style.visibility = "hidden";
    } else {
      this.Error.style.visibility = "visible";
    }
  }
}
