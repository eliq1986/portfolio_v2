// npm modules
const express = require("express");
const chalk = require("chalk");
const chalkError = chalk.cyan.bgBlack;

// custom modules
const { port, developerName, contactInfo, skills, urls, portfolioHeading } = require("./config");
const { projects } = require("./data");

const app = express();


// Static Files
app.use("/static", express.static("public"));



// View Engine
app.set("view engine", "pug");


// Routes
app.get("/", (req, res)=> {
  res.render("index", { projects, portfolioHeading, developerName });
});


app.get("/about", (req, res) => {
  res.render("about", { developerName, contactInfo, skills, urls });
});

app.get("/projects/:id", (req, res)=> {
const selectedProject =  projects[req.params.id];
res.render("project", { selectedProject });
});



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
