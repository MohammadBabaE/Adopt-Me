import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "../Requests/fetchBreedList";

export default function useBreedList(animal) {
  console.log("usebreedanimal: ", animal);
  const results = useQuery(["Breeds", animal], fetchBreedList);
  console.log(results);

  return [results?.data?.breeds ?? [], results.status];
}
