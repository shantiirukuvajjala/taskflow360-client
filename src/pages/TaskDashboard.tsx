import React, { useEffect, useState } from "react";
import { Task } from "../models/Tasks";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import {
  getTasks,
  addTask,
  deleteTask,
  updateTask,
} from "../services/taskService";

// Main component that drives the task dashboard UI and functionality
const TaskDashboard: React.FC = () => {
  // Local state for the list of tasks
  const [tasks, setTasks] = useState<Task[]>([]);
  // Local state for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Fetches all tasks from the backend when the component loads (on mount)
  const loadTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error loading tasks", error);
    }
  };

  // Handles adding a new task using the input values
  const handleAddTask = async () => {
    const newTask = {
      title,
      description,
      dueDate: new Date().toISOString(),
      isCompleted: false,
    };

    try {
      const added = await addTask(newTask);
      setTasks((prev) => [...prev, added]);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error adding task", error);
    }
  };

  // Handles deleting a task by its ID
  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting task", error);
    }
  };

  // Toggles the task's isCompleted state and updates it in backend
  const handleToggleComplete = async (taskToUpdate: Task) => {
    try {
      const updated = await updateTask(taskToUpdate);
      setTasks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    } catch (error) {
      console.error("Error updating task", error);
    }
  };

  // Runs once after component is rendered to load initial tasks
  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        padding: "2rem",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h2 style={{ marginBottom: "1.5rem" }}>Task Dashboard</h2>

      {/* Input form for adding new task */}
      <TaskForm
        title={title}
        description={description}
        onTitleChange={setTitle}
        onDescriptionChange={setDescription}
        onAdd={handleAddTask}
      />

      {/* Task list rendered using individual TaskCard components */}
      <ul style={{ padding: 0 }}>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={handleDelete}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskDashboard;
