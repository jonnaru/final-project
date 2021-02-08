import { createSlice } from "@reduxjs/toolkit";
import { URL } from "../App";

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    name: "",
    lastName: "",
    address: "",
    postalCode: "",
    city: "",
    email: "",
    statusMessage: "",
  },
  likes: [],
};

export const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      console.log(`Access Token: ${accessToken}`);
      state.login.accessToken = accessToken;
    },

    setUserId: (state, action) => {
      const { userId } = action.payload;
      console.log(`User Id: ${userId}`);
      state.login.userId = userId;
    },
    setName: (state, action) => {
      const { name } = action.payload;
      console.log(`User first name: ${name}`);
      state.login.name = name;
    },
    setLastName: (state, action) => {
      const { lastName } = action.payload;
      console.log(`User last name: ${lastName}`);
      state.login.lastName = lastName;
    },
    setAddress: (state, action) => {
      const { address } = action.payload;
      console.log(`Address: ${address}`);
      state.login.address = address;
    },
    setPostalCode: (state, action) => {
      const { postalCode } = action.payload;
      console.log(`Postal code: ${postalCode}`);
      state.login.postalCode = postalCode;
    },
    setCity: (state, action) => {
      const { city } = action.payload;
      console.log(`City: ${city}`);
      state.login.city = city;
    },
    setEmail: (state, action) => {
      const { email } = action.payload;
      console.log(`Email: ${email}`);
      state.login.email = email;
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload;
      console.log(`Status Message: ${statusMessage}`);
      state.login.statusMessage = statusMessage;
    },
    setLikes: (state, action) => {
      const { likes } = action.payload;
      console.log(`Likes: ${likes}`);
      state.likes = likes;
    },
    logout: (state) => {
      console.log("Logging out");
      state.login.userId = 0;
      state.login.accessToken = null;
      state.login.name = "";
      state.login.lastName = "";
      state.login.address = "";
      state.login.postalCode = "";
      state.login.city = "";
      state.login.email = "";
      state.likes = [];
    },
    handleLike: (state, action) => {
      const { productId } = action.payload;
      if (state.likes.includes(productId)) {
        state.likes = state.likes.filter((like) => like !== productId);
      } else {
        state.likes.push(productId);
      }
    },
  },
});

///// THUNKS

// Get likes

export const handleLikeThunk = (likeId) => {
  console.log("handleLike thunk");
  return (dispatch, getState) => {
    const { userId, accessToken } = getState().user.login;
    const LIKES_URL = `${URL}/users/${userId}/likes`;

    // updating likes in store
    const { handleLike } = user.actions;
    dispatch(handleLike({ productId: likeId }));

    fetch(LIKES_URL, {
      method: "POST",
      body: JSON.stringify({ likeId: likeId }),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to like");
        }
        return res.json();
      })
      .then((json) => console.log(json))
      .catch((err) => {
        console.log("Could not like", err);
        // reverting like in store
        dispatch(handleLike({ productId: likeId }));
      });
  };
};

// Logout

export const logout = () => {
  console.log("logout thunk");
  return (dispatch, getState) => {
    const LOGOUT_URL = `${URL}/users/logout`;
    const accessToken = getState().user.login.accessToken;

    const { logout, setStatusMessage } = user.actions;

    const logoutSuccess = () => {
      dispatch(setStatusMessage({ statusMessage: "You are logged out" }));
      dispatch(logout());
    };

    const logoutFailed = (logoutError) => {
      dispatch(setStatusMessage({ statusMessage: logoutError.message }));
    };

    fetch(LOGOUT_URL, {
      method: "POST",

      headers: { Authorization: accessToken },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to logout");
        }
        return res.json();
      })
      .then((json) => logoutSuccess(json))
      .catch((err) => logoutFailed(err));
  };
};
