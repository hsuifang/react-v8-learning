import { useState, useEffect } from "react";

const localCashe = {};

export default function useBreadList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCashe[animal]) {
      setBreedList([localCashe[animal]]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();

      localCashe[animal] = json.breeds || [];
      setBreedList(localCashe[animal]);

      setStatus(["loaded"]);
    }
  }, [animal]);

  return [breedList, status];
}
