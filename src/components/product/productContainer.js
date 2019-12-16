import React from "react";
import "./product.css";

export const ProductContainer = React.memo(
  ({ title, image, subtitle, tags }) => {
    const tagsJSX =
      tags &&
      tags.map(tag => (
        <span key={tag} className="product-tag">
          {tag}
        </span>
      ));
    return (
      <div className="product-container">
        <img src={image} alt={title} className="product-img" />
        <p>{title}</p>
        <p>{subtitle}</p>
        <div className="product-tags">{tagsJSX}</div>
      </div>
    );
  }
);
