# data layer

- an array with the letters of the alphabet
- an array with the used letters
- an array with the guessed letters
- a counter of errors
- an array with two strings

## changes in data layer

- the array of used letters receives new letters as they are used
- the array of guessed letters changes when it includes the used letter
- the counter adds 1 when a used letter is not in guessed letters

# components

## App

### Show Data

- Show a component Hangman providing the number of errors
- Show a component GuessedLetters providing the guessed letters
- Show a component UsedLetters provideng the used letters
- Show a component Result providing the number of errors

## GuessedLetters

### Show Data

- Receives and shows the guessed letters

## Hangman

### Show Data

- Show the amount of errors, 11 in total

## Letters

### Show Data

- Show the received letter

### Get Actions

- On click call the received action

## Result

### Show Data

- Show the message "You're alive!" when all the letters are guessed
- Show the message "You're dead!" when the counter

### Get Actions

## UsedLetters

### Show Data

- the title "Used letters"
- a list of used/received letters
