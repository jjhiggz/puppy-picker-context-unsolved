export const deleteDogFromDb = (dogId) => {
  return fetch(`http://localhost:3000/dogs/${dogId}`, {
    method: "delete",
  });
};
