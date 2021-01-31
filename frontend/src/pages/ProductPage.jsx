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
  space: "u1hj1odlv53m",
  accessToken: "1TRVfQyDn_PgHJtYsjYqeBAg8hfo5bIATKK_MBsFHYU",
});

export const ProductPage = () => {
  const { id } = useParams();
  const history = useHistory();

  const [product, setProduct] = useState();

  useEffect(() => {
    client
      .getEntry(id)
      .then((item) => {
        console.log("item.fields product page", item.fields);
        setProduct(item.fields);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [id]);

  if (!product) return <></>; // show spinner

  return (
    // Will map this:
    <PageContainer>
      <ProductPageContainer>
        <article>
          <img
            src={`http:${product.image[0].fields.file.url}`}
            alt={product.image[0].fields.title}
          />
        </article>

        <article>
          <ProductCard
            itemTitle={product.productName}
            price={`${product.price} SEK`}
            color={`Glazing: ${product.color}`}
            measurements={`Measurements: ${product.size}`}
            // quantity={`Quantity: ${product.quantity}`}
            quantity={product.quantity}
            description={product.productDescription}
            materialCare={`Item Care: ${product.materialCare}`}
          />
          <div style={{ padding: "40px", textAlign: "right" }}>
            <PrimaryButton
              small
              icon={<IconArrow />}
              title="back"
              onClick={() => history.goBack()}
            />
          </div>
        </article>

        {product.image.slice(1).map((item) => (
          <article>
            <img
              style={{ height: "500px" }}
              src={`http:${item.fields.file.url}`}
              alt={item.fields.title}
            />
          </article>
        ))}
      </ProductPageContainer>
    </PageContainer>
  );
};
