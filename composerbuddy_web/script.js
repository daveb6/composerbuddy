const startingChords = [1, 4, 6];
const numerals = {
  major: ["I", "ii", "iii", "IV", "V", "vi", "viio"],
  minor: ["i", "iio", "III", "iv", "v", "VI", "VII"],
};
const keyCmaj = ["Cmaj", "Dmin", "Emin", "Fmaj", "Gmaj", "Amin", "Bdim"];
const keyAmaj = ["Amin", "Bdim", "Cmaj", "Dmin", "Emin", "Fmaj", "Gmin"];

const scales = {
  c: {
    major: ["C", "D", "Em", "F", "G", "Am", "Bdim"],
    minor: ["Cmin", "Ddim", "Eb", "Fmin", "Gmin", "Ab", "Bb"],
  },

  "c#": {
    major: ["C#", "D#", "Fmin", "F#", "G#", "A#min", "Cdim"],
    minor: ["C#", "D#dim", "E", "F#min", "G#min", "A", "B"],
  },

  d: {
    major: ["D", "E", "F#min", "G", "A", "Bmin", "Cdim"],
    minor: ["Dmin", "Edim", "F", "Gmin", "Amin", "B", "C"],
  },

  "d#": {
    major: ["D#", "F", "Gmin", "G#", "A#", "Cmin", "Ddim"],
    minor: ["D#min", "Fdim", "F#", "G#min", "A#min", "B", "C#"],
  },

  e: {
    major: ["E", "F#", "G#min", "A", "B", "C#min", "D#dim"],
    minor: ["Emin", "F#dim", "G", "Amin", "Bmin", "C", "D"],
  },

  f: {
    major: ["F", "G", "Am", "A#", "C", "Dmin", "Edim"],
    minor: ["Fmin", "Gdim", "G#", "A#min", "Cmin", "C#", "D#"],
  },

  "f#": {
    major: ["F#", "G#", "A#min", "B", "C#", "D#min", "Fdim"],
    minor: ["F#min", "G#dim", "A", "Bmin", "C#min", "D", "E"],
  },

  g: {
    major: ["G", "A", "Bmin", "C", "D", "Emin", "F#dim"],
    minor: ["Gmin", "Adim", "A#", "Cmin", "Dmin", "D#", "F"],
  },

  "g#": {
    major: ["G#", "A#", "Cmin", "C#", "D#", "Fmin", "Gdim"],
    minor: ["G#min", "A#dim", "B", "C#min", "D#min", "E", "F#"],
  },

  a: {
    major: ["A", "B", "C#min", "D", "E", "F#min", "G#dim"],
    minor: ["Amin", "Bdim", "C", "Dmin", "Emin", "F", "G"],
  },

  "a#": {
    major: ["A#", "C", "Dmin", "D#", "F", "Gmin", "Adim"],
    minor: ["A#min", "Cdim", "C#", "D#min", "Fmin", "F#", "G#"],
  },

  b: {
    major: ["B", "C#", "D#min", "E", "F#", "G#min", "A#dim"],
    minor: ["Bmin", "C#dim", "D", "Emin", "F#min", "G", "A"],
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

  document.getElementById("chord-progression-numerals").innerHTML =
    chordProgressionNumerals;
  document.getElementById("chord-progression-chords").innerHTML =
    chordProgressionChords;
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
