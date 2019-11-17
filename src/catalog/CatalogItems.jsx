import { Link } from "react-router-dom";
import React from "react";

const CatalogItems = props => {
  return props.items.map(item => (
    <div className="catalog__item" key={item.id}>
      <div className="item-number">Beach N°{item.id}</div>
      <div className="item-title">{item.name}</div>
      <Link
        className="link arrow-link"
        to={{ pathname: `/collection/${item.id}/1` }}
      >
        →
      </Link>
      {props.grid === "cards" && (
        <img className="item-image" src={item.imageLink} alt={item.name} />
      )}
    </div>
  ));
};

export default CatalogItems;
