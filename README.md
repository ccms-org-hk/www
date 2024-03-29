
# My Steps
No "Git" in mac:
- install brew
- install git via brew

No "npm" in mac:
- install Node.js version 18

To run "npm run deploy", you need Github Personal Access Token

# How to create the app
npx create-react-app www --template typescript
cd www
rm README.old.md
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm -i markdown-to-jsx

Create a file globals.d.ts in the src folder (has to be in src to work), add:
declare module '*.md';
https://stackoverflow.com/questions/44678315/how-to-import-markdown-md-file-in-typescript

npm i react-router-dom
think-twice-beore-run: npm audit fix
think-twice-beore-run: npm audit fix --force

vi package.json
"start": "PORT=3001 react-scripts start"

npm i xlsx
npm i convert-excel-to-json
npm uninstall xlsx
npm uninstall convert-excel-to-json

Search image from:
https://www.freepik.com/

Google Map React:
npm install --save google-map-react
npm i --save-dev @types/google-map-react

Install but failed, so uninstall:
npm i -S @react-google-maps/api
npm uninstall @react-google-maps/api
npm install --save react-google-maps
npm uninstall react-google-maps
npm install --save google-maps-react
npm uninstall google-maps-react
npm uninstall google-map-react
npm uninstall @types/google-map-react

npm install --save-dev gh-pages

npm i react-ga4
<!-- npm uninstall react-ga4 -->

### `npm run build`
### `npm run deploy`

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
