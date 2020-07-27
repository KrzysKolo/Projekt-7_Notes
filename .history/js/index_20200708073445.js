<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>projekt 6 - My notes</title>
    <script
      src="https://kit.fontawesome.com/21efeaf281.js"
      crossorigin="anonymous"
    ></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./../css/style.css" />
  </head>
  <body>
    <div class="menu">
      <h1><i class="fas fa-sticky-note"></i>MyNotes</h1>
      <div class="menu-buttons">
        <button class="add icon"><i class="fas fa-plus"></i>Dodaj</button>
        <button class="delete-all icon">
          <i class="fas fa-trash-alt"></i>Usuń
        </button>
      </div>
    </div>

    <div class="note-area">
      <div class="note">
        <div class="note-header">
          <h3 class="note-title">Notatka #1</h3>
          <button class="delete-note"><i class="fas fa-times icon"></i></button>
        </div>

        <div class="note-body">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda in
          dolorem corporis provident minima nulla! Exercitationem autem maxime
          soluta sed enim consequatur officia molestiae fugit tempora impedit,
          ratione accusantium repellendus?
        </div>
      </div>
    </div>

    <div class="note-panel">
      <h2>Dodaj notatkę</h2>
      <label for="category">Wybierz kategorię: </label>
      <select id="category">
        <option value="0" disabled selected>- Wybierz kategorię -</option>
        <option value="1">Praca</option>
        <option value="2">Dom</option>
        <option value="3">Zakupy</option>
        <option value="4">Inne</option>
      </select>

      <label for="text">Wpisz treść notatki</label>
      <textarea id="text"></textarea>

      <p class="error">UzupeLnij wszystkie pola!</p>
      <div class="panel-buttons">
        <button class="save icon"><i class="fas fa-save">Zapisz</i></button>
        <button class="cancel icon">
          <i class="far fa-window-close"></i>Anuluj
        </button>
      </div>
    </div>
    <script src="./../js/index.html"></script>
  </body>
</html>
