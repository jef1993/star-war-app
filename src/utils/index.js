export const getAllPeople = async (setter) => {
  try {
    const response = await fetch(`https://swapi.dev/api/people`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data.results);
    await setter(data.results);
  } catch (error) {
    console.log(error);
  }
};

export default getAllPeople;
