"use client";
import { createItem } from "@/app/actions";
export function Form() {
  return (
    <form action={createItem}>
      <input name="title" />
      <button type="submit">Create</button>
    </form>
  );
}
