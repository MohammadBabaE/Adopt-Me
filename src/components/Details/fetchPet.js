async function fetchPet({ queryKey }) {
  const id = queryKey[1];
  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details ${id} fetch pet not ok`);
  }
  //why dont we need await apiRes.json()?
  //cuz we dont need its value and were returning a promise?
  return (apiRes.json());
}

export default fetchPet;
