import React from "react";
import { Link } from "react-router-dom";

const CatalogItems = props => {
  return props.items.map(item => (
    <div className="all-catalog__item" key={item.id}>
      <div className="item-number">Coll. N°{item.id}</div>
      <div className="item-title">{item.name}</div>
      <Link
        className="link arrow-link"
        to={{ pathname: `/collection/${item.id}` }}
      >
        →
      </Link>
      <img className="item-image" src={item.imageLink} alt={item.name} />
    </div>
  ));
};

export default CatalogItems;
