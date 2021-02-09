import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createClient } from "contentful";

import { PageContainer } from "./styling/PageContainer";

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

  // till thunk
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
  }, []);

  console.log("likedProducts", likedProducts);

  return (
    <PageContainer>
      {!accessToken ? (
        <h1>Sign in to view user details</h1>
      ) : (
        <>
          <h1>{`Hello ${name}!`}</h1>
          <p>User details:</p>
          <p>{`${name}`}</p>
          <p>{`${lastName}`}</p>
          <p>{`${address}`}</p>
          <p>{`${postalCode}`}</p>
          <p>{`${city}`}</p>
          <p>{`${email}`}</p>
          <p></p>
          <ul>
            {likes.map((like) => (
              <li>{`${like}`} </li>
            ))}
          </ul>
        </>
      )}
    </PageContainer>
  );
};
