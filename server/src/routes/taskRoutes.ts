// taskRoutes.ts - Connects Endpoints to controller functions

import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/taskController";
import { validateId } from "../middleware/validated";

// All paths here start with/api/tasks (see app.ts)
// This follows RESTAPI
const router = Router();

router.post("/", createTask);
router.get("/allTasks", getAllTasks);

router.patch("/:id", validateId, updateTask);
router.delete("/:id", validateId, deleteTask);
router.get("/:id", validateId, getTaskById);

// validateID runs first; the controller only runs if the id is valid

export default router;
