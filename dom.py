import os.path

dom = [
 (0, 'O'),
 (1, 'A'),
 (2, 'B'),
 (3, 'C'),
 (4, 'D'),
 (5, 'E'),
 (6, 'S'),
 (7, 'G'),
 (8, 'H'),
 (9, 'N')
]

dominic_table = "Number, Letters, Person, Action\n"
for tens in dom:
        for units in dom:
                dominic_table += "%d%d = %s%s = \n" % (tens[0], units[0], tens[1], units[1])
save_path = os.path.abspath("~/documents/dom.txt")

file1 = open("dom.txt", 'w')

file1.write(dominic_table)

print(save_path)


print(dominic_table)