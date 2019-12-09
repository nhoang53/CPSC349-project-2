## Summary of the project
Our project is about Food Fight.

We are using REACTJS as Frontend (Website Interface), Firebase as Backend (Cloud datastore), and also YELP API to display Food Restaurant around our location.

We will explain in detail on how to setup the project and as well as run using Yarn.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project used Cloud Firestore as Database [FIREBASE](https://firebase.google.com/).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Setting up firebase
Setting Up Firebase
To start, go to the homepage of [Firebase](https://console.firebase.google.com/u/0/) and click on the Create New Project or the App Project Button. Also, make sure that you have logged into your google account.

### `Creating a Project` 
You will then be required give a name to your project. You can give it the same as your React App, as it will help you keep things simple. But it is not mandatory to have the same name at both places

### `Setting up your Cloud Firestore Database` 
Let’s start configuring the Firebase Realtime Database for our React App. Click on the Database tab (you can also find it on the left hand side of the screen) Make sure that you are selecting “Cloud Firestore Database”, and then click on the Create database 

Select the “Start in test mode” option and click on the enable button

### `Select Sign-in method` 
Go to the Authentication page.

Click on the “Sign-in method” tab and make sure you have Email/Password-enabled as a sign-in provider.

### `Connecting your data with react project` 
Go to your Apps setting
Scroll down until you see Web apps tab
From Firebase SDK snippet
Select Config: Here is an example of what config look like

const firebaseConfig = {

    apiKey: "",

    authDomain: "",

    databaseURL: "",

    projectId: "",

    storageBucket: "",

    messagingSenderId: "",

    appId: "",

    measurementId: ""
};

Copy config into your react folder
CPSC349-GROUP-PROJECT-2/src/config/firebase.js

### `Starting your project with yarn command` 
You can run: "yarn && yarn start" or npm start to start your project
It should connecting to your firebase database.

Thank you 