import React from "react";

export function Filters(props) {
  return (
    <>
      <input
        type="number"
        placeholder="Preço mínimo"
        value={props.minPrice}
        onChange={props.updateaMinPrice}
      />
      <input 
        type="number"
        placeholder="Preçõ máximo"
        value={props.maxPrice}
        onChange={props.updateMaxPrice}
      />
      <input 
        placeholder="Pesquisar"
        value={props.search}
        onChange={props.updateSearch}
      />
    </>
  );
}