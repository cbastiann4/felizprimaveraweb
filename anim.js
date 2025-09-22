// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Beautiful stranger, sitting right there", time: 8 },
  { text: "Looked up at me and my dark curly hair", time: 13 },
  { text: "Looked back for a second, didn't want to be rude", time: 17 },
  { text: "I tend to fall in love on the tube", time: 21 },
  { text: "mMMmMMmMmMMmM", time: 27 },
  { text: "Beautiful stranger, sitting right there", time: 34 },
  { text: "Reading the newspaper, stuck to his chair", time: 38 },
  { text: "I swore that he smiled and I felt my heart drop", time: 42 },
  { text: "Heard the doors open, came to my stop", time: 47 },
  { text: "mMMmMMmMmMMmM", time: 53 },
  { text: "What if I hadn't left the train", time: 60 },
  { text: "At Ladbroke Grove? Would I know his name?", time: 64 },
  { text: "Maybe we would have exchanged a few words", time: 68 },
  { text: "A fairytale moment could have occurred", time: 73 },
  { text: "But my beautiful stranger will have to remain", time: 77 },
  { text: "A stranger until I see him again", time: 81 },
  { text: "See him again", time: 87 },
  { text: "Beautiful stranger, catching my stare", time: 98 },
  { text: "It's fate we collided right then back there", time: 102 },
  { text: "I wonder if he felt the same thing too", time: 106 },
  { text: "Innocent crush on the morning commute", time: 111 },
  { text: "mMMmMMmMmMMmM", time: 117 },
  { text: "What if I would've stayed on the train?", time: 124 },
  { text: "Dared to stand up and ask for his name?", time: 128 },
  { text: "Maybe we would have exchanged a few words", time: 132 },
  { text: "A fairytale moment could have occurred", time: 136 },
  { text: "But my beautiful stranger will have to remain", time: 141 },
  { text: "A stranger until I see him again", time: 145 },
  { text: "See him again", time: 150 },
  { text: "My beautiful stranger will have to remain", time: 163 },
  { text: "A love that came and left with this train", time: 168 },
  { text: "My beautiful stranger", time: 178 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);