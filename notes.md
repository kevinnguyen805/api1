# Node API 1 notes

- created repository on GitHub
- cloned it
- opened it in editor 
- add .gitignore -> gives you a way to not send certain files to your GH repository (general preset files you don't need to upload)
     - ==> npx gitignore node
- add package.json -> tells npm or yarn what packages to download ("recipe for all your Node packages")
     - ==> npm init -y 
- * Add server to package.json * - go to package.json -> replace "Scripts" with "Server": "nodemon index.js"
     - ==> npm run server 
     - now whenever we make a change, it will restart our server automatically (because its watching our index.js file)
-  install `nodemon` as a development dependency 
     - ==> npm i -D nodemon 
- add an `index.js` file to root folder with a console.log
- run the API using `npm run server`


# Basic Express server
- install `express` as a production dependency    
     - ==> `npm i express`
- inside index.js
     - const express = require('express') // equivalent to `import express from 'express'`
     - const server = express();
     - const port = 8000
     - server.listen(port, () => console.log(it's alive))

     - route handlers 