import React from "react";
import { Task } from "../models/Tasks";

interface TaskCardProps {
  task: Task;
  onDelete: (id: string) => void;
  onToggleComplete: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onDelete, onToggleComplete }) => {
  return (
    <li
      style={{
        marginBottom: "10px",
        listStyle: "none",
        textDecoration: task.isCompleted ? "line-through" : "none",
        opacity: task.isCompleted ? 0.6 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => onToggleComplete({ ...task, isCompleted: !task.isCompleted })}
        style={{ marginRight: "10px" }}
      />
      <strong>{task.title}</strong> – {task.description}
      <button
        onClick={() => onDelete(task.id)}
        style={{ marginLeft: "1rem", color: "red" }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskCard;

