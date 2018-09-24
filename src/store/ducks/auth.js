// Action Types

export const Types = {
  LOGIN: "auth/LOGIN",
  LOGOUT: "auth/LOGOUT"
};

// Reducer

const initialState = {
  isLogged: false,
  user: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return { isLogged: true, user: action.payload.user };
    case Types.LOGOUT:
      return { isLogged: false, user: {} };
    default:
      return state;
  }
}

// Action Creators

export function login(user) {
  return {
    type: Types.LOGIN,
    payload: {
      user
    }
  };
}

export function logout() {
  return {
    type: Types.LOGOUT,
    payload: {}
  };
}
