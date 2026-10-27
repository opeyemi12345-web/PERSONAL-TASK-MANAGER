// api.ts - EVERY CALL TO THE BACKEND LIVES HERE

import axios from "axios";
import type { TaskInput, Task } from "./types";

// Pages never write URLs themselves. They call these functions.
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// post /api/tasks -> create a Task
export const createTask = async (task: TaskInput): Promise<Task> => {
  const response = await api.post("/tasks", task);
  return response.data.task;
};

// GET /api/tasks/allTask -> all task
export const getTasks = async (): Promise<Task[]> => {
  const response = await api.get("/tasks/allTasks");
  return response.data.tasks;
};

//GET /api/Task/:id -> one task
export const getTask = async (id: string): Promise<Task> => {
  const response = await api.get(`/tasks/${id}`);
  return response.data.task;
};

// PATCH /api/tasks/:id -> update task
export const updateTask = async (
  id: string,
  task: TaskInput,
): Promise<Task> => {
  const response = await api.patch(`/tasks/${id}`, task);
  return response.data.task;
};

//DELETE /api/tasks/:id -> delete a task
export const deleteTask = async (id: string): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};
// Turns any error into a message we can show users.
// Our server always sends errors as {message: "..."}.
export const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ||
      "Cannot reach the server. Is the server running?"
    );
  }
  return "An unexpected error occurred";
};
