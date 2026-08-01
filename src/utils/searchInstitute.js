// src/utils/searchInstitute.js

export default function searchInstitute(
  institutes = [],
  query = ""
) {

  if (!query.trim()) {
    return [];
  }


  const searchText = query.toLowerCase();


  const results = institutes.filter((institute) => {

    const name =
      institute.name?.toLowerCase() || "";


    const city =
      institute.location?.city?.toLowerCase() || "";


    const state =
      institute.location?.state?.toLowerCase() || "";


    const type =
      institute.type?.toLowerCase() || "";



    return (

      name.includes(searchText) ||

      city.includes(searchText) ||

      state.includes(searchText) ||

      type.includes(searchText)

    );

  });


  return results;

}
