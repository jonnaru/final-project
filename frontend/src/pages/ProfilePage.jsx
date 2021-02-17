import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createClient } from "contentful";

import { PageContainer } from "./styling/PageContainer";
import { ProfilePageContainer } from "./styling/ProfilePageContainer";
import { ProfileItemsContainer } from "./styling/ProfileItemsContainer";
import { ProfileLikedItemCard } from "./styling/ProfileLikedItemCard";
import { ProfileCard } from "./styling/ProfileCard";

// to thunk
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
    // to thunk
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
    <PageContainer>
      <ProfilePageContainer>
        {!accessToken ? (
          <article>
            <h1 style={{ paddingLeft: "12px" }}>
              sign in to view user details
            </h1>
          </article>
        ) : (
          likedProducts.length > 0 && (
            <ProfileItemsContainer>
              {likedProducts.map((liked) => (
                <ProfileLikedItemCard
                  src={`http:${liked.fields.thumb.fields.file.url}`}
                  title={liked.fields.productName}
                  price={liked.fields.price}
                  id={liked.sys.id}
                />
              ))}
            </ProfileItemsContainer>
          )
        )}
        <ProfileCard>
          {accessToken && (
            <>
              <h1>
                <span>{`Hello ${name}!`}</span>
              </h1>
              {likedProducts.length === 0 && <h3>you have no saved items</h3>}
              <p>
                <span>{`${name} ${lastName}`}</span>
              </p>
              <p>
                <span>{`${address}`}</span>
              </p>
              <p>
                <span>{`${postalCode}, ${city}`}</span>
              </p>
              <p>{`${email}`}</p>
            </>
          )}
        </ProfileCard>
      </ProfilePageContainer>
    </PageContainer>
  );
};
