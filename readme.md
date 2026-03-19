# Making backend step by step
## 1. setup the folders 
```
public  
  |-temp  
src  
  |-controllers
  |-db
  |-middlewares
  |-models
  |-routes
  |-utils
  |-app.js
  |-constants.js
  |-index.js
.env
.gitignore
.prettierignore
.prettierrc
```

install nodemon and prettier  
in package.json, do
```
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
```
in prettierrc
```
{
    "singleQuote": false,
    "bracketSpacing": true,
    "tabWidth": 2,
    "semi": true,
    "trailingComma": "es5"
}
```
in prettierignore, add
- *.env
- .env
- .env.*
- /node_modules
- ./dist
- /.vscode

if we want to push empty folder on github than we have to add a .gitkeep file which is empty

## 2. Database connection mongodb atlas
- always use trycatch and async await while working with database
- the mongodb password should not contain any special character  

### workflow  
- in constans.js , add db name  
```
export const DB_NAME = "videotube"
```  
- in index.js file in src folder, import the database connection function and execute it .   
we add connection function in seperate file to make the src/index.js less messy
```
import connectDB from "./db/index.js"
connectDB()
```
- in /db/index.js
```
import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongodb connected,  DB host ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("Mongodb connection error", error);
        process.exit(1)   
    }
}

export default connectDB
```
- mongoose.connect returns an object
## Note ->
while importing files , make sure to add their extensions


