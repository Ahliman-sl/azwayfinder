/* eslint-disable react/prop-types */
import { useState } from "react";
import CityData from "../../data/CityData.json";

export default function SearchBar({ onSelectCity }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 1) {
      const results = CityData.filter((city) =>
        city.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredCities(results);
    } else {
      setFilteredCities([]);
    }
  };

  const handleSelectCity = (city) => {
    onSelectCity(city);
    setSearchTerm("");
    setFilteredCities([]);
  };
  return (
    <>
      {/*<!-- Component: Plain basic base sized search input  --> */}
      <div className="relative my-6 mx-4">
        <input
          id="id-s01"
          type="search"
          name="id-s01"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search here"
          aria-label="Search content"
          className="peer relative h-10 w-full rounded-xl border  border-gray-400 px-4 pr-12 text-sm text-slate-400 outline-none transition-all bg-gray-900  focus:border-slate-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-2.5 h-5 w-5 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
          aria-label="Search icon"
          role="graphics-symbol"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        {filteredCities.length > 0 && (
          <ul className="absolute bg-gray-900 border rounded-sm px-2 text-slate-100 border-gray-300 w-full mt-1 max-h-40 overflow-y-auto z-10">
            {filteredCities.map((city) => (
              <li
                key={city}
                onClick={() => handleSelectCity(city)}
                className="p-2 cursor-pointer hover:bg-gray-600"
              >
                {city}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/*<!-- End Plain search input  --> */}
    </>
  );
}
