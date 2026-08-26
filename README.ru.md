# Игры разума

[![Actions Status](https://github.com/G3ntleM4n/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/G3ntleM4n/frontend-project-44/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/7d735a79f02ce3d770c6/maintainability)](https://codeclimate.com/github/G3ntleM4n/frontend-project-44/maintainability)

Русский | [English](README.md)

**«Игры разума»** — набор из пяти консольных игр по мотивам популярных мобильных приложений для тренировки мозга. Каждая игра задаёт пользователю три вопроса подряд. Если на все три даны правильные ответы — игра пройдена. Если хотя бы один ответ неверный — игра завершается, и предлагается пройти её заново.

## Список игр

| Игра | Команда запуска | Что нужно сделать |
| --- | --- | --- |
| Калькулятор | `brain-calc` | Вычислить результат арифметического выражения (`+`, `-`, `*`) |
| Прогрессия | `brain-progression` | Найти пропущенное число в числовой последовательности |
| Чётное число | `brain-even` | Определить, чётное число или нет (ответ `yes`/`no`) |
| НОД | `brain-gcd` | Найти наибольший общий делитель двух чисел |
| Простое число | `brain-prime` | Определить, является ли число простым (ответ `yes`/`no`) |

## Требования

Перед установкой убедитесь, что на компьютере установлен **Node.js** версии 18 или выше (вместе с ним автоматически устанавливается менеджер пакетов `npm`).

Проверить, установлен ли Node.js, и узнать его версию можно командой:

```bash
node -v
```

Если команда не найдена — скачайте и установите Node.js с официального сайта: <https://nodejs.org>

## Установка

1. Скачайте (или клонируйте) проект и перейдите в его папку:

   ```bash
   cd frontend-project-44-main
   ```

2. Установите зависимости проекта:

   ```bash
   make install
   ```

   Это команда-сокращение для `npm ci` — она установит все необходимые библиотеки в папку `node_modules`.

3. Сделайте пакет доступным для запуска глобально из любой папки (необязательный шаг):

   ```bash
   npm link
   ```

   После этого команды `brain-calc`, `brain-even`, `brain-gcd`, `brain-progression`, `brain-prime` можно будет запускать из терминала напрямую, находясь в любой директории.

## Запуск игр

Если вы выполнили `npm link`, запускайте игры напрямую по имени, например:

```bash
brain-progression
```

Если `npm link` не выполнялся, запускайте игры через `node`, указывая путь к файлу игры, например:

```bash
node bin/brain-progression.js
```

Аналогично запускаются и остальные игры: `brain-calc`, `brain-even`, `brain-gcd`, `brain-prime` (или их файлы из папки `bin/`).

## Как играть

1. Запустите нужную игру одной из команд выше.
2. Введите своё имя, когда программа его спросит.
3. Программа задаст вопрос — введите ответ в терминале и нажмите Enter.
4. Если ответ верный — появится сообщение `Correct!`, и будет задан следующий вопрос.
5. Если ответы верны все 3 раза подряд — игра поздравит вас с победой.
6. Если ответ неверный — игра сообщит правильный ответ и предложит попробовать снова (нужно будет перезапустить игру той же командой).

### Пример игры «Прогрессия»

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

## Полезные команды для разработки

Эти команды пригодятся, если вы дорабатываете код проекта:

```bash
make install   # установка зависимостей (npm ci)
make lint      # проверка кода линтером ESLint
make publish   # тестовая публикация пакета (npm publish --dry-run)
```

## Структура проекта

```text
frontend-project-44-main/
├── bin/                 # исполняемые файлы для каждой игры (точки входа)
│   ├── brain-games.js
│   ├── brain-calc.js
│   ├── brain-even.js
│   ├── brain-gcd.js
│   ├── brain-progression.js
│   └── brain-prime.js
├── src/
│   ├── index.js                       # общие вспомогательные функции (приветствие, случайные числа, ввод ответа)
│   ├── shared-games-logic-module.js   # общий игровой цикл (3 раунда, проверка ответов)
│   └── games/                         # логика и вопросы каждой отдельной игры
├── package.json         # зависимости и команды проекта
└── Makefile             # короткие команды для установки/запуска/линтинга
```

## Видеопримеры игр

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
