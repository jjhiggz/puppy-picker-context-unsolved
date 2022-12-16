export const updateFavoriteForDog = ({ dogId, isFavorite }) => {
  return fetch(`http://localhost:3000/dogs/${dogId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      isFavorite,
    }),
  });
};
