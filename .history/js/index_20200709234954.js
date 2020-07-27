class MyNotes {
  constructor() {
    this.cat;
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
    if (
      this.TextArea.value !== "" &&
      category.options[category.selectedIndex].value !== "0"
    ) {
      this.createNote();
      this.Error.style.visibility = "hidden";
    } else {
      this.Error.style.visibility = "visible";
    }
  }
  createNote() {
    const newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.setAttribute("id", this.cardId);
    newNote.innerHTML = `
    <div class="note-header">
    <h3 class="note-title">${this.selectValue()}</h3>
    <button class="delete-note">
      <i class="fas fa-times icon close"></i>
    </button>
  </div>

  <div class="note-body">
    ${this.TextArea.value};
  </div>
    `;
    this.NoteArea.appendChild(newNote);
    this.cardId++;
    this.TextArea.value = "";
    this.Category.selectedIndex = 0;
    this.NotePanel.style.display = "none";
    this.checkColor(newNote);
  }
  selectValue() {
    this.cat = category.options[category.selectedIndex].text;
    return this.cat;
  }
  checkColor = (cat) => {
    console.log(cat);
    switch (this.selectValue()) {
      case "Praca":
        note.style.backgroundColor = "rgb(72, 255, 0)";
        break;
      case "Dom":
        note.style.backgroundColor = "rgb(232, 110, 34)";
        break;
      case "Zakupy":
        note.style.backgroundColor = "rgb(41, 34, 232)";
        break;
      case "Inne":
        note.style.backgroundColor = "rgb(162, 23, 178)";
        break;
    }
  };
}
