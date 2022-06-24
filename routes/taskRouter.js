const express = require("express");
const router = express.Router();
const controller = require("./../controllers/taskController");
const { body, query, param } = require("express-validator");

router
  .route("/api/tasks")
  .get(controller.get_tasks)
  .post(
    [
      body("id").isNumeric().withMessage("invalid id."),
      body("title").isString().withMessage("invalid title ."),
      body("description").isString().withMessage("invalid description ."),

    ],
    controller.add_task
  )

  .put(
    [
      body("id").isNumeric().withMessage("invalid id."),
      body("title").isString().withMessage("invalid title ."),
      body("description").isString().withMessage("invalid description ."),

    ],
    controller.edit_task
  )
  .delete(
    [
      body("id").isNumeric().withMessage("invalid id."),

    ],
    controller.del_task
  )

  router
  .route("/api/tasks/:searchMethod/:searchValue")
  .get(controller.search_tasks)
module.exports = router;