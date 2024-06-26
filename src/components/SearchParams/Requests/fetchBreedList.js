async function fetchBreedList({ queryKey }) {
  const animal = queryKey[1];

  //because this is an async function this will work out
  if (!animal) return [];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`breeds ${animal} fetch not ok`);
  }
  return apiRes.json();
}
export default fetchBreedList;
