# Team Profile Generator

Dynamically generate a list of employees and print them to an html document.

---

Created by: Robert Bishop

This project is intended as a homework assignment for class.  Questions, comments, suggestions and constructive criticism are always welcome.

<a href="mailto: rbishop85@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
<a href="https://github.com/rbishop85" target="_blank"><img src="	https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://www.linkedin.com/in/robert-m-bishop/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>

---

## Contents:
* [Demo](#demo)
* [Install](#install)
* [Tests](#tests)
* [Usage](#usage)
* [Skills/Concepts Used](#skillsconcepts-used)
* [Steps Taken](#steps-taken)
* [Thoughts/Future Ideas](#thoughtsfuture-ideas)
* [Links](#links)
* [License](#license)
<!-- Add tests -->

---

## Demo:

> Video demoing team profile generator in action.

https://user-images.githubusercontent.com/103389448/183340388-24f98da8-8287-435c-9016-d295842e85bd.mp4

---

## Install:

To install this app, after downloading it, make sure to run:
```
npm i
```
This will insure that the necessary dependencies are pulled down, in this case "Inquirer" and for the sake of running tests "Jest".

---

## Tests:

To run tests that show functionality of code, please run:
```
npm run test
```

---

## Usage:

After dependencies have been loaded and tests ran, simly key the following into your command prompt to start the app:
```
node index.js
```

---

## Skills/Concepts Used:

* Javascript
  - Node.js
  - Inquirer.js
  - FS (File System)
  - Jest (Testing framework)
  - Classes and Sub-classes

---

## Steps Taken:

- [x] Created repo and starting files & directories as called for in homework readme.
- [x] Installed and setup required dependencies.
- [x] Created empty array for holding employee objects and setup intial question blocks for employee generation.
- [x] Generated questions for manager class and then copied and edited to make questions fit other classes.
- [x] Created functions for all 3 employee types, set to use inquirer to ask set questions and console.log the results.
- [x] Setup initial employee class.
- [x] Setup sub-classes for Manager, Engineer and Intern.
- [x] Set created employee objects to be pushed to employees array.
- [x] Changed question list to be one standard question list that all employee generating functions would copy, edit and then add their own final question to, instead of having 3 complete separate lists.
- [x] Developed template html file using Bootstrap for styling.
- [x] Setup html generating function to take in the array of employee objects and return the full html page structure with dynamic data for each employee.
- [x] Used fs to create an html file using that returned data.
- [x] Created tests to show the proper functionality of all classes/sub-classes.
- [x] Created demo video for project.
- [x] Added detailed notes to primary js files.
- [x] Created README.md.

---

## Thoughts/Future Ideas:

I ran out of time, but would like to add in code to validate that the user is responding to each question with valid data.  For now I used a basic check to ensure they at least don't leave any question responses blank.  It would be nice to also make the output html file look a bit less simple.

---

## Links:

<a href="https://nodejs.org/en/" target="_blank">Node.js</a>

<a href="https://www.npmjs.com/package/inquirer" target="_blank">Inquirer</a>

<a href="https://jestjs.io/" target="_blank">JEST</a>

---

## License:


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

[Top of Page](#team-profile-generator)

