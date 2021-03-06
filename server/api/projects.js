const router = require("express").Router();
const Project = require("../db/project");
const Robot = require("../db/robot");
// GET /api/projects
router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.findAll();
    res.send(projects);
  } catch (error) {
    next(error);
  }
});
// GET /api/projects/:id
router.get("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id, { include: Robot });
    res.send(project);
  } catch (error) {
    next(error);
  }
});
// POST /api/projects
router.post("/", async (req, res, next) => {
  try {
    res.send(await Project.create(req.body));
  } catch (error) {
    next(error);
  }
});

// PUT /api/projects/:id/unassign
router.put("/:id/unassign", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id, { include: Robot });
    if (req.body.robotId) {
      await project.removeRobot(req.body.robotId);
      res.send(project);
    } else {
      throw new Error("Must provide a robotId");
    }
  } catch (error) {
    next(error);
  }
});

// PUT /api/projects/:id
router.put("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id, { include: Robot });
    res.send(await project.update(req.body));
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const project = await Project.findByPk(req.params.id);
    await project.destroy();
    res.send(project);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
