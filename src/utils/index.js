// export const getAllPeople = async (setter, query) => {
//   try {
//     let allData = [];
//     const response = await fetch(
//       `https://swapi.dev/api/people/?search=${query}`,
//       {
//         method: "GET",
//       }
//     );
//     const data = await response.json();
//     allData.push(...data.results);

//     while (data.next !== null) {
//       const response = await fetch(data.next, {
//         method: "GET",
//       });
//       const dataNext = await response.json();
//       allData.push(...dataNext.results);
//       data.next = dataNext.next;
//     }
//     setter(
//       allData.sort((a, b) => {
//         return a.name.localeCompare(b.name);
//       })
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getData = async (setter, type, query) => {
  try {
    const response = await fetch(
      `https://swapi.dev/api/${type}/?search=${query}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setter(data);
  } catch (error) {
    console.log(error);
  }
};

export default getData;
