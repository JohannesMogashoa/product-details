- [Running & Compiling](#running--compiling)
  - [Available Scripts](#available-scripts)
    - [`npm start`](#npm-start)
    - [`npm test`](#npm-test)
    - [`npm run build`](#npm-run-build)
    - [`npm run eject`](#npm-run-eject)
- [Architecture](#architecture)
- [Stack Choice](#stack-choice)
  - [Reason](#reason)

# Running & Compiling

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

# Architecture

Being that React is an unopinionated framework, it does not provide a set guideline on how to structure and organise the project.

```
- /src
    - /assets
    - /components
        - /AddToBox
          - index.tsx
        - /CheckoutSummary
          - index.tsx
        - /InfoBox
            - Badges.tsx
            - CountDown.tsx
            - DescriptionBox.tsx
            - index.tsx
            - Links.tsx
            - MarchExpo.tsx
            - OptionComponent.tsx
            - Payments.tsx
            - PriceBox.tsx
            - Productstsx
            - Ratings.tsx
            - TradeAssurance.tsx
        - tooltip.tsx
    - /context
    - /hooks
    - /types
    - /utils
    - /utils
    - App.tsx
    - index.tsx
    - react-app-env.d.ts
```

I created components for the sections on the page in a way to group the UI and logic of sections. Given that this is a single page, I did not want to over engineer the solution.

# Stack Choice

In this project I opted for the following stack:

    - React (Create-React-App)
    - Typescript
    - SASS/SCSS
    - Axios

## Reason

Reason why I chose the particular combination of React + Typescript is the typesafety using Typescript brings into the project, it allows me to find bugs and error that if having used Javascript I might have caught only at runtime. This increases productivity and lessens the amount of debugging needed to be done. Reaason for going with SASS/SCSS is the ability to properly execute the BEM methodology but allowing for nesting of classes and elements from the same components which also increases productivity.

If I had to do it again I wouldn't change anything as I used mostly built-in functionality that is shipped with React and only used 3<sup>rd</sup> party packages where I needed to make the logic simplier without having too many node_modules that will just bloat the project.