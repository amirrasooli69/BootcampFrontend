import { useEffect, useState } from "react";
import cities from "../assets/cities.json";
/* eslint-disable react/prop-types */
const Input = () => {
  useEffect(() => {
    setSelectedCities(cities);
    // handleChange();
  }, []);

  const [hint, setHint] = useState();
  const [selectedCities, setSelectedCities] = useState([]);

  // console.log(cities)
  const handleChange = (e) => {
    let input = e.target.value;
    const selected = cities.filter((city) => city.startsWith(input));
    setHint(selected[0]);

    setSelectedCities(selected);
  };
  return (
    <>
      <div className="input">
        <label htmlFor="input">{hint}</label>
        <input type="text" id="input" onChange={handleChange} />
      </div>

      {
        <div className="list">
          {selectedCities.map((city, index) => (
            <p key={index}>{city}</p>
          ))}
        </div>
      }
    </>
  );
};

export default Input;
