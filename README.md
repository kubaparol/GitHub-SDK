# GitHub SDK

![screen app](./assets/screen.png)

&nbsp;

## :mag: Overview

This project is something like a [Software Development Kit](https://pl.wikipedia.org/wiki/Software_development_kit). It provides a simple way to use the GitHub API. 

You can enter your username and a generated token.

Name and token fields are validated.

My SDK is built according to TDD methodology, i.e. red-green-refactor.

[Click to see](https://kubaparol.github.io/github-sdk/) the live version of my app and check your repositories!

&nbsp;

## :bulb: Technologies

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

&nbsp;

## :cd: Installation

### You can run the project locally 

- First you need to clone the project

``` 
git clone
```

- Then install all necessary packages

```
npm i
```

Now you can try the code!

### You can also run the tests

```
npm run test
```

### And start development mode

```
npm start
```

### If you want you can use single methods from within the code

- Create a data.js file in the js folder and enter the code below with your data

```
const data = {
  name: 'yourName',
  token: 'yourSecretToken',
};

export default data;
```

- In the app.js file create an instance and use the methods in init() as below

```
function init() {
  const gh = new GitHubSDK(data.name, data.token);

  console.log(gh.getUserLogin());
}
```

&nbsp;

## :clap: Special thanks

Special thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) - for providing me with this task and for code review.