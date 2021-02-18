import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getLikes } from "../shared/getLikes";

import { PageContainer } from "./styling/PageContainer";
import { ProfilePageContainer } from "./styling/ProfilePageContainer";
import { ProfileItemsContainer } from "./styling/ProfileItemsContainer";
import { ProfileLikedItemCard } from "./styling/ProfileLikedItemCard";
import { ProfileCard } from "./styling/ProfileCard";

export const ProfilePage = () => {
  const [likedProducts, setLikedProducts] = useState([]);

  const accessToken = useSelector((store) => store.user.login.accessToken);
  const name = useSelector((store) => store.user.login.name);
  const lastName = useSelector((store) => store.user.login.lastName);
  const address = useSelector((store) => store.user.login.address);
  const postalCode = useSelector((store) => store.user.login.postalCode);
  const city = useSelector((store) => store.user.login.city);
  const email = useSelector((store) => store.user.login.email);
  const likes = useSelector((store) => store.user.likes);

  useEffect(() => {
    getLikes(likes, setLikedProducts);
  }, [likes]);

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
