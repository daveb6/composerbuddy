const startingChords = [1, 4, 6];
const numerals = {
  major: ["I", "ii", "iii", "IV", "V", "vi", "viio"],
  minor: ["i", "iio", "III", "iv", "v", "VI", "VII"],
};

const scales = {
  c: {
    major: ["C", "D", "Em", "F", "G", "Am", "Bdim"],
    minor: ["Cm", "Ddim", "Eb", "Fm", "Gm", "Ab", "Bb"],
  },

  "c#": {
    major: ["C#", "D#", "Fm", "F#", "G#", "A#m", "Cdim"],
    minor: ["C#m", "D#dim", "E", "F#m", "G#m", "A", "B"],
  },

  d: {
    major: ["D", "E", "F#m", "G", "A", "Bm", "Cdim"],
    minor: ["Dm", "Edim", "F", "Gm", "Am", "B", "C"],
  },

  "d#": {
    major: ["D#", "F", "Gm", "G#", "A#", "Cm", "Ddim"],
    minor: ["D#m", "Fdim", "F#", "G#m", "A#m", "B", "C#"],
  },

  e: {
    major: ["E", "F#", "G#m", "A", "B", "C#m", "D#dim"],
    minor: ["Em", "F#dim", "G", "Am", "Bm", "C", "D"],
  },

  f: {
    major: ["F", "G", "Am", "A#", "C", "Dm", "Edim"],
    minor: ["Fm", "Gdim", "G#", "A#m", "Cm", "C#", "D#"],
  },

  "f#": {
    major: ["F#", "G#", "A#m", "B", "C#", "D#m", "Fdim"],
    minor: ["F#m", "G#dim", "A", "Bm", "C#m", "D", "E"],
  },

  g: {
    major: ["G", "A", "Bm", "C", "D", "Em", "F#dim"],
    minor: ["Gm", "Adim", "A#", "Cm", "Dm", "D#", "F"],
  },

  "g#": {
    major: ["G#", "A#", "Cm", "C#", "D#", "Fm", "Gdim"],
    minor: ["G#m", "A#dim", "B", "C#m", "D#m", "E", "F#"],
  },

  a: {
    major: ["A", "B", "C#m", "D", "E", "F#m", "G#dim"],
    minor: ["Am", "Bdim", "C", "Dm", "Em", "F", "G"],
  },

  "a#": {
    major: ["A#", "C", "Dm", "D#", "F", "Gm", "Adim"],
    minor: ["A#m", "Cdim", "C#", "D#m", "Fm", "F#", "G#"],
  },

  b: {
    major: ["B", "C#", "D#m", "E", "F#", "G#m", "A#dim"],
    minor: ["Bm", "C#dim", "D", "Em", "F#m", "G", "A"],
  },
};

function generateProgression() {
  chordProgressionInts = [];
  chordProgressionNumerals = [];
  chordProgressionChords = [];
  numChords = document.getElementById("num-chords").value;
  mode = document.getElementById("mode").value;
  key = document.getElementById("key").value;
  scale = scales[key][mode];
  chord = "";
  var startingChord =
    startingChords[Math.floor(Math.random() * startingChords.length)];
  chordProgressionInts.push(startingChord);

  for (let i = 0; i < numChords - 1; i++) {
    chordProgressionInts.push(findNextChord(chordProgressionInts[i], mode));
  }
  for (let i in chordProgressionInts) {
    chord = chordProgressionInts[i];
    chordProgressionChords.push(scale[chord - 1]);
    chordProgressionNumerals.push(numerals[mode][chord - 1]);
  }
  document.getElementById("chord-progression-chords").innerHTML =
    "<h2>" + chordProgressionChords + "</h2>";
  document.getElementById("chord-progression-numerals").innerHTML =
    "<h4>(" + chordProgressionNumerals + ")</h4>";
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
