### README (Українська)

# JSNinjas-BackEnd

Цей проєкт створений за допомогою Vite, React, TypeScript, SWC та Tailwind CSS. Він надає швидке і сучасне середовище для розробки веб-застосунків.

## Вимоги

Перед початком роботи переконайтеся, що у вас встановлені наступні інструменти:

- [Node.js](https://nodejs.org/) (версія 14 або новіша)
- [npm](https://www.npmjs.com/) (зазвичай встановлюється разом із Node.js)

## Установка

1. **Клонування репозиторію**

   Спочатку вам потрібно клонувати репозиторій проєкту:

   ```bash
   git clone https://github.com/andrew-sistuk/JSNinjas-BackEnd.git
   ```

2. **Перехід до каталогу проєкту**

   Перейдіть до каталогу проєкту:

   ```bash
   cd JSNinjas-BackEnd
   ```

3. **Встановлення залежностей**

   Використовуйте npm для встановлення всіх необхідних залежностей:

   ```bash
   npm install
   ```

4. **Налаштувати файл утм**

Приклад знаходиться тут .env.example

## Запуск проєкту

Для запуску проєкту виконайте наступну команду:

```bash
npm run dev
```

Ця команда запускає Vite-сервер і відкриває ваш застосунок у браузері за адресою [http://localhost:3000](http://localhost:3000). Будь-які зміни у файлах автоматично відображатимуться у браузері завдяки функції гарячого перезавантаження.

## Увага

1. Порт може відрізнятись в залежності від PORT в env
2. Час відповіді може бути близько 50 сек.
3. Посмлання можуть ставати неактивними чрз певний час саме на Render.com

Для швидкого ознайомлення сервер розміжено за на Render.com [https://jsninjas-backend.onrender.com](https://jsninjas-backend.onrender.com)

Містить наступні endpoint:
1) get /characters
2) get /characters/:characterId
3) post /characters
4) patch /characters/:characterId
5) delete /characters/:characterId
6) delete /characters/img/:characterId/:img

---
# JSNinjas-BackEnd

This project is built using Vite, React, TypeScript, SWC and Tailwind CSS. It provides a fast and modern environment for developing web applications.

## Requirements

Before you start, make sure you have the following tools installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (usually installed with Node.js)

## Installation

1. **Repository cloning**

First you need to clone the project repository:

 ```bash
 git clone https://github.com/andrew-sistuk/JSNinjas-BackEnd.git
 ```

2. **Go to the project directory**

Go to the project directory:

 ```bash
 cd JSNinjas-BackEnd
 ```

3. **Installing dependencies**

Use npm to install all required dependencies:

 ```bash
 npm install
 ```

4. **Configure utm file**

An example is here .env.example

## Launching the project

To start the project, execute the following command:

```bash
npm run dev
```

This command starts the Vite server and opens your application in the browser at [http://localhost:3000](http://localhost:3000). Any changes to the files will be automatically reflected in the browser thanks to the hot reload function.

## WARNING

1. Port may differ depending on PORT in env
2. The response time can be about 50 seconds.
3. Posts may become inactive for a certain period of time on Render.com itself

For a quick overview, the server is demarcated on Render.com [https://jsninjas-backend.onrender.com](https://jsninjas-backend.onrender.com)

Contains the following endpoints:
1) get /characters
2) get /characters/:characterId
3) post /characters
4) patch /characters/:characterId
5) delete /characters/:characterId
6) delete /characters/img/:characterId/:img
