const getAPI = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const obj = await response.json();
    return obj;
  } catch (error) {
    return new Error(error);
  }
};

export default getAPI;