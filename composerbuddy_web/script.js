const startingChords = [1, 4, 6];
const majNumerals = ["I", "ii", "iii", "IV", "V", "vi", "viio"];
const minNumerals = ["i", "iio", "III", "iv", "v", "VI", "VII"];
const keyCmaj = ["Cmaj", "Dmin", "Emin", "Fmaj", "Gmaj", "Amin", "Bdim"];
const keyAmaj = ["Amin", "Bdim", "Cmaj", "Dmin", "Emin", "Fmaj", "Gmin"];

function generateProgression() {
  chordProgressionInts = [];
  chordProgressionNumerals = [];
  chordProgressionChords = [];
  numChords = document.getElementById("num-chords").value;
  mode = document.getElementById("mode").value;

  var startingChord =
    startingChords[Math.floor(Math.random() * startingChords.length)];
  chordProgressionInts.push(startingChord);

  for (let i = 0; i < numChords - 1; i++) {
    chordProgressionInts.push(findNextChord(chordProgressionInts[i], mode));
  }

  console.log(chordProgressionInts);
  console.log(mode);
  document.getElementById("chord-progression").innerHTML = chordProgressionInts;
}

function findNextChord(chord, maj) {
  nextChord = "";
  randNum = Math.random();
  if (mode == "major") {
    if (chord == 1) {
      if (randNum <= 0.4) {
        nextChord = 5;
      } else if (randNum > 0.4 && randNum <= 0.8) {
        nextChord = 4;
      } else if (randNum > 0.8) {
        nextChord = 6;
      }
    } else if (chord == 2) {
      if (randNum <= 0.5) {
        nextChord = 5;
      } else if (randNum > 0.5 && randNum <= 0.75) {
        nextChord = 4;
      } else if (randNum > 0.75) {
        nextChord = 6;
      }
    } else if (chord == 3) {
      if (randNum <= 0.75) {
        nextChord = 6;
      } else if (randNum > 0.75) {
        nextChord = 4;
      }
    } else if (chord == 4) {
      if (randNum <= 0.5) {
        nextChord = 5;
      } else if (randNum > 0.5 && randNum <= 0.75) {
        nextChord = 1;
      } else if (randNum > 0.75) {
        nextChord = 2;
      }
    } else if (chord == 5) {
      if (randNum <= 0.5) {
        nextChord = 1;
      } else if (randNum > 0.5 && randNum <= 0.75) {
        nextChord = 4;
      } else if (randNum > 0.75) {
        nextChord = 6;
      }
    } else if (chord == 6) {
      if (randNum <= 0.4) {
        nextChord = 2;
      } else if (randNum > 0.4 && randNum <= 0.8) {
        nextChord = 5;
      } else if (randNum > 0.8 && randNum <= 0.9) {
        nextChord = 3;
      } else if (randNum > 0.9) nextChord = 4;
    }
  } else {
    if (chord == 1) {
      if (randNum <= 0.4) {
        nextChord = 5;
      } else if (randNum > 0.4 && randNum <= 0.8) {
        nextChord = 4;
      } else if (randNum > 0.8) {
        nextChord = 6;
      }
    } else if (chord == 3) {
      if (randNum <= 0.75) {
        nextChord = 6;
      } else if (randNum > 0.75) {
        nextChord = 4;
      }
    } else if (chord == 4) {
      if (randNum <= 0.5) {
        nextChord = 5;
      } else if (randNum > 0.5 && randNum <= 0.75) {
        nextChord = 4;
      } else if (randNum > 0.75) {
        nextChord = 6;
      }
    } else if (chord == 5) {
      if (randNum <= 0.5) {
        nextChord = 1;
      } else if (randNum > 0.5 && randNum <= 0.75) {
        nextChord = 4;
      } else if (randNum > 0.75) {
        nextChord = 6;
      }
    } else if (chord == 6) {
      if (randNum <= 0.4) {
        nextChord = 1;
      } else if (randNum > 0.4 && randNum <= 0.8) {
        nextChord = 3;
      } else if (randNum > 0.8) {
        nextChord = 7;
      }
    } else if (chord == 7) {
      if (randNum <= 0.75) {
        nextChord = 3;
      } else if (randNum > 0.75) {
        nextChord = 4;
      }
    }
  }
  return nextChord;
}
