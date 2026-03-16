### Making backend step by step
### 1. setup the folders 
public
    temp
src
    controllers
    db
    middlewares
    models
    routes
    utils
    app.js
    constants.js
    index.js
.env
.gitignore
.prettierignore
.prettierrc

install nodemon and prettier
in package.json
{
  "type": "module",
  "scripts": {
    "dev": "nodemon src/index.js"
  },
  "devDependencies": {
    "nodemon": "^3.1.14",
    "prettier": "3.8.1"
  }
}

in prettierrc
{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "semi": true,
    "trailingComma": "es5"
}

in prettierignore
*.env
.env
.env.*
/node_modules
./dist
/.vscode

if we want to push empty folder on github than we have to add a .gitkeep file which is empty

### Database connection mongodb atlas
always use trycatch and async await while working with database