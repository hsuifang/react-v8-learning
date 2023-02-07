import { useState } from "react";

function SearchParams() {
  const [location, setLocation] = useState("Seatle, WA");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="location"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
