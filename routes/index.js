const express = require("express");
const router = express.Router();
const { developerName, contactInfo, skills, urls, portfolioHeading } = require("../config");
const { projects } = require("../data");


// Routes
router.get("/", (req, res)=> {
  res.render("index", { projects, portfolioHeading, developerName });
});


router.get("/about", (req, res) => {
  res.render("about", { developerName, contactInfo, skills, urls });
});

router.get("/projects/:id", (req, res)=> {
res.render("project", { selectedProject: projects[req.params.id] });
});


module.exports = router;
