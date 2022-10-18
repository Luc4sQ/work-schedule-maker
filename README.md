# Introduction

This Repository is build secondary for advancing my programming skills. Primarily i want to solve a common problem, which i encounter in my working environment. **building work plans**!

We assume we got $n$ different worker. We call worker number $i$ for now $w_i$. 

Every $w_i$ has the following properties:

|description|datatype|
|---|---|
| maximum worktime per month | number |
| explicit weekdays and times $w_i$ can work | matrix of numbers |

Now the **argument** of our procedure is defined by
$$w := (w_1,\ldots,w_n).$$

My first target for this program is, that it returns a matrix with values $t_{ij}$, which represents how much time $t_{ij}$ the worker $i$ must spent on day $j$. The matrix should look like

$$J=\begin{pmatrix}j_{11}& j_{12} & j_{13} &j_{14}& j_{15}&j_{16} \\ j_{21} &j_{22} & j_{23} & j_{24}&j_{25} &j_{26} \\ \vdots & \vdots & \vdots & \vdots & \vdots &\vdots \\ j_{n1}&j_{n2}& j_{n3}& j_{n4}&j_{n5} &j_{n6}\end{pmatrix}\in \mathbb{R}^{6\times n}$$

# Further outlook

My main (lol) goal is, that this program accepts an explicit input like mentioned above, returns a whole plan (with cool visuals) and accepts many more options like preferations of employees etc.

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
