const router = require("express").Router();
const Project = require("../db/project");
const Robot = require("../db/robot");

router.get("/", async (req, res, next) => {
  try {
    const robots = await Robot.findAll();
    res.send(robots);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id, { include: Project });
    res.send(robot);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    res.send(await Robot.create(req.body));
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    console.log("Express", req.body);
    if (req.body.projectId) {
      await robot.removeProject(req.body.projectId);
      res.send(robot);
    } else {
      res.send(await robot.update(req.body));
    }
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const robot = await Robot.findByPk(req.params.id);
    await robot.destroy();
    res.send("robot");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
