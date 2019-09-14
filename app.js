// npm modules
const express = require("express");
const chalk = require("chalk");
const chalkError = chalk.cyan.bgBlack;

// custom modules
const { port, developerName, contactInfo, skills, urls, portfolioHeading } = require("./config");
const routes = require("./routes");

const app = express();


// Static Files
app.use("/static", express.static("public"));



// View Engine
app.set("view engine", "pug");
app.use(routes);





app.use((req, res, next)=> {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);

});



app.use((err,req,res,next)=>  {
  res.locals.error = err;
  res.status(err.status)
  res.render("error");
  console.log(chalkError(`Error Message: ${err.message}; status code: ${err.status}`))
});



app.listen(port, ()=> {
  console.log(`App running on port ${port}`)
});
