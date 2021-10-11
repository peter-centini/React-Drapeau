import React from "react";

const Card = ({country}) => {

  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <li className="card">
      <img src={country.flags.png} alt="flag" />
      {/* <span>{country.flag}</span> */}
      <div className="data-container">
        <ul>
          <li>{country.name.name}</li>
          <li>{country.capital}</li>
          <li>Pop. {numberFormat(country.population)}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
