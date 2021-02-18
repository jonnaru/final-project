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
      state.login.accessToken = accessToken;
    },

    setUserId: (state, action) => {
      const { userId } = action.payload;
      state.login.userId = userId;
    },
    setName: (state, action) => {
      const { name } = action.payload;
      state.login.name = name;
    },
    setLastName: (state, action) => {
      const { lastName } = action.payload;
      state.login.lastName = lastName;
    },
    setAddress: (state, action) => {
      const { address } = action.payload;
      state.login.address = address;
    },
    setPostalCode: (state, action) => {
      const { postalCode } = action.payload;
      state.login.postalCode = postalCode;
    },
    setCity: (state, action) => {
      const { city } = action.payload;
      state.login.city = city;
    },
    setEmail: (state, action) => {
      const { email } = action.payload;
      state.login.email = email;
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload;
      state.login.statusMessage = statusMessage;
    },
    setLikes: (state, action) => {
      const { likes } = action.payload;
      state.likes = likes;
    },
    logout: (state) => {
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

////////// THUNKS //////////

// LOGIN
export const login = (email, password) => {
  return (dispatch) => {
    const LOGIN_URL = `${URL}/sessions`;

    const {
      setAccessToken,
      setUserId,
      setName,
      setLastName,
      setAddress,
      setPostalCode,
      setCity,
      setEmail,
      setStatusMessage,
      setLikes,
    } = user.actions;

    // Login success
    const handleLoginSuccess = (loginResponse) => {
      // sending response to store
      dispatch(setAccessToken({ accessToken: loginResponse.accessToken }));
      dispatch(setUserId({ userId: loginResponse.userId }));
      dispatch(setName({ name: loginResponse.name }));
      dispatch(setLastName({ lastName: loginResponse.lastName }));
      dispatch(setAddress({ address: loginResponse.address }));
      dispatch(setPostalCode({ postalCode: loginResponse.postalCode }));
      dispatch(setCity({ city: loginResponse.city }));
      dispatch(setEmail({ email: loginResponse.email }));
      dispatch(setLikes({ likes: loginResponse.likes }));
    };

    // Login fail
    const handleLoginFailed = (loginError) => {
      // reset accessToken and show error message
      dispatch(setAccessToken({ accessToken: null }));
      dispatch(setStatusMessage({ statusMessage: loginError.message }));
    };

    fetch(LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Login Failed");
        }
        return res.json();
      })
      .then((json) => handleLoginSuccess(json))
      .catch((err) => handleLoginFailed(err));
  };
};

// SIGN UP
export const signup = (
  name,
  lastName,
  address,
  postalCode,
  city,
  email,
  password
) => {
  return (dispatch) => {
    const SIGNUP_URL = `${URL}/users`;

    const {
      setAccessToken,
      setUserId,
      setName,
      setLastName,
      setStatusMessage,
      setAddress,
      setPostalCode,
      setCity,
      setEmail,
      setLikes,
    } = user.actions;

    const handleSignupSuccess = (signupResponse) => {
      dispatch(setAccessToken({ accessToken: signupResponse.accessToken }));
      dispatch(setUserId({ userId: signupResponse.userId }));
      dispatch(setName({ name: signupResponse.name }));
      dispatch(setLastName({ lastName: signupResponse.lastName }));
      dispatch(setAddress({ address: signupResponse.address }));
      dispatch(setPostalCode({ postalCode: signupResponse.postalCode }));
      dispatch(setCity({ city: signupResponse.city }));
      dispatch(setEmail({ email: signupResponse.email }));
      dispatch(setLikes({ likes: signupResponse.likes }));
    };

    const handleSignupFailed = (signupError) => {
      dispatch(setStatusMessage({ statusMessage: signupError.message }));
    };

    fetch(SIGNUP_URL, {
      method: "POST",
      body: JSON.stringify({
        name,
        lastName,
        address,
        postalCode,
        city,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Signup Failed");
        }
        return res.json();
      })
      .then((json) => handleSignupSuccess(json))
      .catch((err) => handleSignupFailed(err));
  };
};

// GET LIKES
export const handleLikeThunk = (likeId) => {
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
      .catch((err) => {
        console.error("Could not like", err);
        // reverting like in store
        dispatch(handleLike({ productId: likeId }));
      });
  };
};

// LOGOUT
export const logout = () => {
  return (dispatch, getState) => {
    const LOGOUT_URL = `${URL}/users/logout`;
    const accessToken = getState().user.login.accessToken;

    const { logout, setStatusMessage } = user.actions;

    const handleLogout = () => {
      dispatch(setStatusMessage({ statusMessage: "You are logged out" }));
      dispatch(logout());
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
      .catch((err) => console.error(err))
      .finally(() => handleLogout());
  };
};
