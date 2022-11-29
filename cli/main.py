import random

maj_numerals = ["I", "ii", "iii", "IV", "V", "vi", "viio"]
min_numerals = ["i", "iio", "III", "iv", "v", "VI", "VII"]
key_cmaj = ["Cmaj","Dmin","Emin","Fmaj","Gmaj","Amin","Bdim"]
key_amin = ["Amin","Bdim","Cmaj","Dmin","Emin","Fmaj","Gmin"]

starting_chords = [1, 4, 6]

def generate_progression(num_chords, maj):
    chord_progression_ints = []
    chord_progression_numerals = []
    chord_progression_chords = []

    chord_progression_ints.append(random.choice(starting_chords))

    for i in range(num_chords - 1):
        chord_progression_ints.append(find_next(chord_progression_ints[i], maj))
    if maj:
        for i in list(chord_progression_ints):
            chord_progression_numerals.append(maj_numerals[i - 1])
            chord_progression_chords.append(key_cmaj[i - 1])
    else:
        for i in list(chord_progression_ints):
            chord_progression_numerals.append(min_numerals[i - 1])
            chord_progression_chords.append(key_amin[i - 1])     
    return chord_progression_ints, chord_progression_numerals, chord_progression_chords
    # print(chord_progression_ints)
    # print(chord_progression_numerals)
    # print(chord_progression_chords)         
def find_next(chord, maj):
    next_chord = ""
    randint = random.randint(1,100)
    if maj:
        if chord == 1:
            if randint <= 40: # 40%
                next_chord = 5 
            elif randint > 40 and randint <=80: # 40%
                next_chord = 4
            elif randint > 80: # 20%
                next_chord = 6   
        elif chord == 2:
            if randint <= 50: # 50%
                next_chord = 5 
            elif randint > 50 and randint <=75: # 25%
                next_chord = 4
            elif randint > 75: # 25%
                next_chord = 6   
        elif chord == 3:
            if randint <= 75: # 75%
                next_chord = 6 
            elif randint > 75: # 25%
                next_chord = 4
        elif chord == 4:
            if randint <= 50: # 50%
                next_chord = 5
            elif randint > 50 and randint <=75: # 25%
                next_chord = 1
            elif randint > 75: # 25%
                next_chord = 2
        elif chord == 5:
            if randint <= 50: # 50%
                next_chord = 1
            elif randint > 50 and randint <=75: # 25%
                next_chord = 4
            elif randint > 75: # 25%
                next_chord = 6 
        elif chord == 6:
            if randint <= 40: # 40%
                next_chord = 2 
            elif randint > 40 and randint <=80: # 40%
                next_chord = 5
            elif randint > 80 and randint <=90 : # 10%
                next_chord = 3
            elif randint > 90: #10%
                next_chord = 4 
#       elif chord == 7:
    else:
        if chord == 1:
            if randint <= 40: # 40%
                next_chord = 5 
            elif randint > 40 and randint <=80: # 40%
                next_chord = 4
            elif randint > 80: # 20%
                next_chord = 6   
#        elif chord == 2:
        elif chord == 3:
            if randint <= 75: # 75%
                next_chord = 6 
            elif randint > 75: # 25%
                next_chord = 4
        elif chord == 4:
            if randint <= 50: # 50%
                next_chord = 5 
            elif randint > 50 and randint <=75: # 25%
                next_chord = 4
            elif randint > 75: # 25%
                next_chord = 6   
        elif chord == 5:
            if randint <= 50: # 50%
                next_chord = 1
            elif randint > 50 and randint <=75: # 25%
                next_chord = 4
            elif randint > 75: # 25%
                next_chord = 6 
        elif chord == 6:
            if randint <= 40: # 40%
                next_chord = 1
            elif randint > 40 and randint <=80: # 40%
                next_chord = 3
            elif randint > 80: # 20%
                next_chord = 7
        elif chord == 7:
            if randint <= 75: # 75%
                next_chord = 3
            elif randint > 75: # 25%
                next_chord = 4   
    return next_chord

print(generate_progression(4, False))