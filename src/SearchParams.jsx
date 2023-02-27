import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import useBreedList from "./useBreadList";
import fetchSearch from "./fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [reqParams, setReqParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const [animal, setAnimal] = useState("");
  const [breads] = useBreedList(animal);
  const results = useQuery(["search", reqParams], fetchSearch);

  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setReqParams(obj);
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          placeholder="location"
        />
        <label htmlFor="animals">Animals</label>
        <select
          id="animals"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option value={animal} key={animal}>
              {animal}
            </option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select id="breed" name="breed" disabled={breads.length === 0}>
          <option />
          {breads.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>

        <button>Submit</button>
      </form>
      <Results pets={pets} />;
    </div>
  );
}

export default SearchParams;
