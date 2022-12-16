export const addDogToDb = ({ name, description, image }) => {
  const body = JSON.stringify({ name, description, isFavorite: false, image });

  return fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
      ["Content-Type"]: "application/json",
    },
    body,
  });
};
