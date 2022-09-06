import { AuthFilter, CategoryFilter } from "./actionTypes"


export const categoryFilter = (blogId) => {

    return {
        type: CategoryFilter,
        payload: blogId
    }

}


export const authFilter = (blogId) => {
  return {
    type: AuthFilter,
    payload: blogId,
  };
};