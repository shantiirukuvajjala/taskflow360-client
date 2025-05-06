import axios from "axios";
import { Task } from "../models/Tasks";

const API_BASE_URL = "http://localhost:5034/api/tasks"; // your .NET API

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get<Task[]>(API_BASE_URL);
  return response.data;
};

export const addTask = async (task: Omit<Task, "id">): Promise<Task> => {
  const response = await axios.post<Task>(API_BASE_URL, task);
  return response.data;
};

export const updateTask = async (task: Task): Promise<Task> => {
  const response = await axios.put<Task>(`${API_BASE_URL}/${task.id}`, task);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
