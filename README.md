# Introduction

This Repository is build secondary for advancing my programming skills. Primarily i want to solve a common problem, which i encounter in my working environment. **building work plans**!

We assume we got $N$ different **worker**. We call worker number $i$ for now $w_i$. 

Every $w_i$ has the following properties:

|description|datatype|
|---|---|
| maximum worktime per month | number |
| explicit weekdays and times $w_i$ can't work | matrix of days and mapped times |

Now additionally we assume we have a **company** $C$ with properties:

|description|datatype|
|---|---|
| minimal worktime per day and employee | number |
| maximal worktime per day and employee (fixed in general by laws) | number |
| maximal hours of worktime on day $i$ | number |
|

Now the **argument** of our procedure is defined by
$$x := (w_1,\ldots,w_N,C).$$

My first target for this program is, that it returns two matrices with values $t_{ij}$ and $s_{ij}$, which represents the exact time $t_{ij}$ when the worker $i$ starts on day $j$ and exact time $s_{ij}$ when the worker $i$ stops on day $j$. Depending $M$ ist the number of days in the current month, the matrices should look like

$$S=\begin{pmatrix}s_{11}& s_{12} & \ldots & s_{1M} \\
s_{21} &s_{22} & \ldots & s_{2M}\\
\vdots & \vdots &  & \vdots\\
s_{N1}&s_{N2}& \ldots& s_{NM}\end{pmatrix}\in \mathbb{R}^{M\times N},\quad T=\begin{pmatrix}t_{11}& t_{12} & \ldots & t_{1M} \\
t_{21} &t_{22} & \ldots & t_{2M}\\
\vdots & \vdots &  & \vdots\\
t_{N1}&t_{N2}& \ldots& t_{NM}\end{pmatrix}\in \mathbb{R}^{M\times N}$$

With further considerations i plan to solve this problem via an optimization problem approach. That means i search an optimal solution 

$$x^* \in \mathbb{R}^{2MN}$$

such that $x^*$ is a "valid" plan.

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
