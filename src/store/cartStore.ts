import { atom } from "nanostores";
import type { Course } from "../models/course";

export const cartStore = atom<Course[]>([]);

export function saveCart() {
  window.localStorage.setItem("cart", JSON.stringify(cartStore.get()));
}

export function getCartFromStorage(): Course[] {
  return JSON.parse(window.localStorage.getItem("cart") ?? "[]");
}

export function isCourseIsInCart(courses: Course[], course: Course): boolean {
  return courses.some((c) => c.title === course.title);
}
