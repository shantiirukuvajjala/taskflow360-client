import React from "react";

interface TaskFormProps {
  title: string;
  description: string;
  onTitleChange: (val: string) => void;
  onDescriptionChange: (val: string) => void;
  onAdd: () => void;
}

// Reusable form component to capture a new task’s title and description
const TaskForm: React.FC<TaskFormProps> = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onAdd,
}) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        style={{ flex: 1, padding: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        style={{ flex: 2, padding: "0.5rem" }}
      />
      {/* Add button triggers onAdd handler passed by parent */}
      <button onClick={onAdd} style={{ padding: "0.5rem 1rem" }}>
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
