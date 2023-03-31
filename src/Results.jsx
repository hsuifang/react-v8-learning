import Pet from "./Pet";

function Results({ pets }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
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
