from  main import generate_progression

#print(main.py.generate_progression(4, False))

def count_unique_progressions(sample_size, num_chords, maj):
    unique_progressions = set()
    for i in range(sample_size):
        unique_progressions.add(str(generate_progression(num_chords,maj)[1]))
    print("unique progressions found: " + str(len(unique_progressions)) + "/" + str(sample_size))
count_unique_progressions(sample_size = 500, num_chords = 4 , maj = True)