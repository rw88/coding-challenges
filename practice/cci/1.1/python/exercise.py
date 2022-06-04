# Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
# cannot use additional data structures?
# Hints: #44, #117, #132


def isUnique(text):
    for index, a in enumerate(text):
        for b in text[index+1:]:
            if a == b:
                return False
    return True

# Unit tests
print(isUnique("abcde") == True)
print(isUnique("xyzxa") == False)

# Solution time complexity is O(n)