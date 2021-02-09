import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createClient } from "contentful";

import { PageContainer } from "./styling/PageContainer";
import { ProfileLikedItemCard } from "./styling/ProfileLikedItemCard";
import { ProfileCard } from "./styling/ProfileCard";

const client = createClient({
  space: "u1hj1odlv53m",
  accessToken: "1TRVfQyDn_PgHJtYsjYqeBAg8hfo5bIATKK_MBsFHYU",
});

export const ProfilePage = () => {
  const accessToken = useSelector((store) => store.user.login.accessToken);
  const name = useSelector((store) => store.user.login.name);
  const lastName = useSelector((store) => store.user.login.lastName);
  const address = useSelector((store) => store.user.login.address);
  const postalCode = useSelector((store) => store.user.login.postalCode);
  const city = useSelector((store) => store.user.login.city);
  const email = useSelector((store) => store.user.login.email);
  const likes = useSelector((store) => store.user.likes);

  const [likedProducts, setLikedProducts] = useState([]);

  // change to thunk
  useEffect(() => {
    client
      .getEntries({
        content_type: "product",
        limit: 20,
        skip: 0,
      })
      .then((data) => {
        const filteredProducts = data.items.filter((item) =>
          likes.includes(item.sys.id)
        );
        setLikedProducts(filteredProducts);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, [likes]);

  console.log("likedProducts", likedProducts);

  return (
    <PageContainer style={{ display: "flex" }}>
      {!accessToken ? (
        <article>
          <h1 style={{ paddingLeft: "12px" }}>sign in to view user details</h1>
        </article>
      ) : (
        likedProducts.length > 0 && (
          <article style={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
            {likedProducts.map((liked) => (
              <ProfileLikedItemCard
                src={`http:${liked.fields.thumb.fields.file.url}`}
                title={liked.fields.productName}
                price={liked.fields.price}
                id={liked.sys.id}
              />
            ))}
          </article>
        )
      )}
      <ProfileCard>
        {accessToken && (
          <>
            <h1>{`Hello ${name}!`}</h1>
            {likedProducts.length === 0 && <h3>you have no saved items</h3>}
            <p>{`${name} ${lastName}`}</p>
            <p>{`${address}`}</p>
            <p>{`${postalCode}, ${city}`}</p>
            <p>{`${email}`}</p>
          </>
        )}
      </ProfileCard>
    </PageContainer>
  );
};
