import React from "react";
import "./collection-preview.scss";
import CollectionItem from "../collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((items, idx) => idx < 4)
          .map(({ id, ...collection }) => (
            <CollectionItem key={id} {...collection} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
