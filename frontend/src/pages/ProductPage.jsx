import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { PageContainer } from "./styling/PageContainer";
import { ProductPageContainer } from "./styling/ProductPageContainer";
import { ProductCard } from "../lib/ProductCard";
import { PrimaryButton } from "../lib/PrimaryButton";
import { IconArrow } from "../lib/IconArrow";

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
});

export const ProductPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState();

  useEffect(() => {
    client
      .getEntry(id)
      .then((item) => {
        console.log("item product page", item);
        setProduct({
          id: item.sys.id,
          title: item.fields.productName,
          price: item.fields.price,
          color: item.fields.color,
          measurements: item.fields.size,
          inStock: item.fields.quantity,
          description: item.fields.productDescription,
          materialCare: item.fields.materialCare,
          sample: item.fields.sample,
          mainImage: item.fields.image[0],
          images: item.fields.image.slice(1),
          thumb: item.fields.thumb,
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id]);

  if (!product) return <></>; // show spinner

  return (
    <PageContainer>
      <ProductPageContainer>
        <article>
          <img
            src={`http:${product.mainImage.fields.file.url}`}
            alt={product.mainImage.fields.title}
          />
        </article>

        <article>
          <ProductCard product={product} />
          <div style={{ padding: "40px", textAlign: "right" }}>
            <PrimaryButton
              small
              icon={<IconArrow />}
              title="back"
              onClick={() => history.goBack()}
            />
          </div>
        </article>

        {product.images.map((image) => (
          <article>
            <img
              style={{ height: "500px" }}
              src={`http:${image.fields.file.url}`}
              alt={image.fields.title}
            />
          </article>
        ))}
      </ProductPageContainer>
    </PageContainer>
  );
};
