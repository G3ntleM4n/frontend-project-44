# Brain Games

[![Actions Status](https://github.com/G3ntleM4n/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/G3ntleM4n/frontend-project-44/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/7d735a79f02ce3d770c6/maintainability)](https://codeclimate.com/github/G3ntleM4n/frontend-project-44/maintainability)

[Русский](README.ru.md) | English

**Brain Games** is a collection of five console games inspired by popular mobile brain-training apps. Each game asks the user three questions in a row. If all three answers are correct, the game is won. If any answer is wrong, the game ends immediately and invites the player to try again.

## List of games

| Game | Command | Task |
| --- | --- | --- |
| Calculator | `brain-calc` | Calculate the result of an arithmetic expression (`+`, `-`, `*`) |
| Progression | `brain-progression` | Find the missing number in a numeric sequence |
| Even number | `brain-even` | Determine whether a number is even (answer `yes`/`no`) |
| GCD | `brain-gcd` | Find the greatest common divisor of two numbers |
| Prime number | `brain-prime` | Determine whether a number is prime (answer `yes`/`no`) |

## Requirements

Before installing, make sure **Node.js** version 18 or higher is installed on your computer (its package manager `npm` is installed automatically with it).

Check whether Node.js is installed and see its version with:

```bash
node -v
```

If the command is not found, download and install Node.js from the official website: <https://nodejs.org>

## Installation

1. Download (or clone) the project and go into its folder:

   ```bash
   cd frontend-project-44-main
   ```

2. Install the project dependencies:

   ```bash
   make install
   ```

   This is a shortcut for `npm ci` — it installs all required libraries into the `node_modules` folder.

3. Make the package available globally so you can run it from any folder (optional):

   ```bash
   npm link
   ```

   After this, the commands `brain-calc`, `brain-even`, `brain-gcd`, `brain-progression`, and `brain-prime` can be run directly from the terminal, from any directory.

## Running the games

If you ran `npm link`, launch a game directly by name, for example:

```bash
brain-progression
```

If you did not run `npm link`, launch a game via `node`, pointing to its file, for example:

```bash
node bin/brain-progression.js
```

The other games work the same way: `brain-calc`, `brain-even`, `brain-gcd`, `brain-prime` (or their files in the `bin/` folder).

## How to play

1. Launch the game you want using one of the commands above.
2. Enter your name when the program asks for it.
3. The program will ask a question — type your answer in the terminal and press Enter.
4. If the answer is correct, you'll see `Correct!`, and the next question will follow.
5. If you answer correctly three times in a row, the game congratulates you on winning.
6. If an answer is wrong, the game shows the correct answer and invites you to try again (you'll need to restart the game with the same command).

### Example: "Progression" game

```text
$ brain-progression
Welcome to the Brain Games!
May I have your name? Roman
Hello, Roman!
What number is missing in the progression?
Question: 14 .. 18 20 22 24 26 28
Your answer: 16
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24
Correct!
Congratulations, Roman!
```

## Useful commands for development

These commands are useful if you're working on the project's code:

```bash
make install   # install dependencies (npm ci)
make lint      # check the code with ESLint
make publish   # dry-run package publish (npm publish --dry-run)
```

## Project structure

```text
frontend-project-44-main/
├── bin/                 # executable files for each game (entry points)
│   ├── brain-games.js
│   ├── brain-calc.js
│   ├── brain-even.js
│   ├── brain-gcd.js
│   ├── brain-progression.js
│   └── brain-prime.js
├── src/
│   ├── index.js                       # shared helper functions (greeting, random numbers, reading the answer)
│   ├── shared-games-logic-module.js   # shared game loop (3 rounds, answer checking)
│   └── games/                         # question logic for each individual game
├── package.json         # project dependencies and scripts
└── Makefile             # short commands for install/run/lint
```

## Video examples of the games

### Brain-even

[![asciicast](https://asciinema.org/a/orjnStCP9WKRs2RLzeAvJQwox.svg)](https://asciinema.org/a/orjnStCP9WKRs2RLzeAvJQwox)

### Brain-calc

[![asciicast](https://asciinema.org/a/03Ok2V8stmaVIw1qZ3zi1hsTm.svg)](https://asciinema.org/a/03Ok2V8stmaVIw1qZ3zi1hsTm)

### Brain-gcd

[![asciicast](https://asciinema.org/a/ilCvmqnX73NQdfHLDeGJftQg4.svg)](https://asciinema.org/a/ilCvmqnX73NQdfHLDeGJftQg4)

### Brain-progression

[![asciicast](https://asciinema.org/a/rXlpF0xmSdZeXWrrWv8GqnqEb.svg)](https://asciinema.org/a/rXlpF0xmSdZeXWrrWv8GqnqEb)

### Brain-prime

[![asciicast](https://asciinema.org/a/oBdDi3dj41r174zRYvL99aSBb.svg)](https://asciinema.org/a/oBdDi3dj41r174zRYvL99aSBb)
