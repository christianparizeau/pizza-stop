import React from 'react';

export default function CatalogButton(props) {
  const type = props.light ? 'light' : 'dark';
  return (
    <button className={`btn btn-sm btn-outline-${type}`}
      onClick={props.catalog}>
      <span className="mobile-text">
                Catalog
      </span>
    </button>);
}
