"use server";

import { revalidatePath } from "next/cache";

const API_URL = "https://66d8f0e94ad2f6b8ed530881.mockapi.io/todos";

export async function getTodos() {
  return fetch(API_URL).then(
    (res) => res.json()
  );
}

export async function createTodos(formData: FormData) {
  const newTodoItem = {
    title: formData.get('title'),
    description: formData.get('description'),
    completed: false,
    createdAt: new Date().toISOString()
  };
  fetch(API_URL, {
    method: 'POST',
    // Send your data in the request body as JSON
    body: JSON.stringify(newTodoItem)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    revalidatePath('/');
  }).catch(error => {
    console.error('Error:', error);
  })
}
