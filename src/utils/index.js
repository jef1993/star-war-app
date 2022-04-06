export const getPeople = async (setter, query) => {
  try {
    let allData = [];
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${query}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    allData.push(...data.results);

    while (data.next !== null) {
      const response = await fetch(data.next, {
        method: "GET",
      });
      const dataNext = await response.json();
      allData.push(...dataNext.results);
      data.next = dataNext.next;
    }
    setter(
      allData.sort((a, b) => {
        return a.name.localeCompare(b.name);
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export default getPeople;
