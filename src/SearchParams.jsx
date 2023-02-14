import { useState, useEffect } from "react";
import Results from "./Results";
import useBreedList from "./useBreadList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

function SearchParams() {
  const [location, setLocation] = useState("Seatle, WA");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breads] = useBreedList(animal);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
        />
        <label htmlFor="animals">Animals</label>
        <select
          id="animals"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
            setBreed("");
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
        <select
          id="breed"
          disabled={breads.length === 0}
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        >
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
