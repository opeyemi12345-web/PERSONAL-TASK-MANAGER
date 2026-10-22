// task.ts-- WHAT A TASKS LOOKS LIKE IN THE DATABASE

import { model, Schema } from "mongoose";

// Flow:
// 1. Describe the task's shape with a Typescript interface
// 2. Describe the same with a Mongoose schema
// 3. Create the model -  the object we use to create/find/update/delete tasks

export const TASk_TAGS = ["Urgent", "Important"];

export interface ITask {
  title: string;
  description: string;
  tag: string;
}
// steps 2: the database structure and rules for a task
const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxLength: [100, "Title cannot be longer than 100 character"],
    },

    description: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },

    tag: {
      type: String,
      required: [true, "Tag is required"],
      enum: { values: TASk_TAGS, message: "Tag must be Urgent or Important" },
    },
  },
  { timestamps: true }, // Automatically adds createdAt and updatedAt
);

// step 3: the model. 'tasks becomes the "tasks" collection in MongoDB
const Task = model<ITask>("Task", taskSchema);
export default Task;
