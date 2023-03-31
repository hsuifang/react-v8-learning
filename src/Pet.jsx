import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images && images.length) {
    hero = images[0];
  }
  return (
    <Link to={`details/${id}`} className="relative mb-3 block">
      <div className="block">
        <img src={hero} alt={name} />
      </div>
      <div className="absolute left-0 bottom-0 w-full bg-gradient-to-tr from-white to-transparent p-3">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
