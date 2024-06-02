import { useState } from "react";
import useBreedList from "./hooks/useBreedList";
import { useQuery } from "@tanstack/react-query";
import Results from "../Results";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
import fetchSearch from "./Requests/fetchSearch";

const SearchParams = () => {
  const [animal, setAnimal] = useState("");
  const [requestParams, setRequestParams] = useState({
    location: "",
    breed: "",
    animal: "",
  });
  const [Breeds] = useBreedList(animal);

  const results = useQuery(["petSearch", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  console.log(results.isLoading);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            location: formData.get("location") ?? "",
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
          };
          setRequestParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              console.log("onchange called ", e.target.value);
              setAnimal(e.target.value);
            }}
          >
            <option></option>
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select id="breed" name="breed" disabled={Breeds.length === 0}>
            <option></option>
            {Breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} isLoading={results.isLoading} />
    </div>
  );
};

export default SearchParams;
