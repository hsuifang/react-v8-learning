import Pet from "./Pet";

function Results({ pets }) {
  return (
    <div className="search">
      {pets.length && pets[0].name}
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            key={pet.id}
          />
        ))
      ) : (
        <h1>No Pets Found</h1>
      )}
    </div>
  );
}

export default Results;
