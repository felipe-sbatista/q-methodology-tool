<h1>
    q-methodology-tool
</h1>

<p align="center">
  <a href="#Overview">Overview</a> •
  <a href="#dependencies">Dependencies</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-run">How To Run</a> •
  <a href="#how-to-edit">How To Edit</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://raw.githubusercontent.com/felipe-sbatista/q-methodology-tool/master/media/gif/example.gif)

## Overview 

Q methodology is a type of approach to collect personal opinions and knowledges. This project aims to serve as a tool to apply this kind of survey

## Dependencies

- [Material](https://material.angular.io/)
- [Node.js](https://nodejs.org/)
- [Firebase](https://firebase.google.com/)

## Key Features

* Able to multidevices
* Statements and classifications configurables by config file
* Stores or exports the survey
* Multi-language (EN-PT-FR) ~ In development

## How To Run

To clone and run this application, it is necessary [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From command line:

```bash
# Clone the repository
$ git clone https://github.com/felipe-sbatista/q-methodology-tool.git

# Go into the repository
$ cd q-methodology-tool

# Install dependencies
$ npm install

# Run the app
$ npm start or ng serve
```

## How To Edit

# Set statements
To configure for your own survey, you must edit with the expected statements and the number of degree in the statements.json at src/app/assets

![screenshot](https://raw.githubusercontent.com/felipe-sbatista/q-methodology-tool/master/media/image/statements.png)

# Set database
The configured database is Firebase, if you expects to use it, you must create a Firebase project and set up your own credentials in environment.ts at src/app/environments

# Set up hosting
To hosting the application in Firebase you must create a Firebase project and change the configurations at firebase.json
```bash
# building to deploy
$ ng build

# deploy at firebase
$ firebase deploy
```
## License

MIT
