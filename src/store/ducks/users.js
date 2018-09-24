// Action Types

export const Types = {
  SIGN_UP: "users/SIGN_UP"
};

// Reducer

export default function reducer(state = [], action) {
  switch (action.type) {
    case Types.SIGN_UP:
      return [
        ...state,
        { username: action.payload.username, content: action.payload.content }
      ];
    default:
      return state;
  }
}

// Action Creators

export function signUp(username, content) {
  return {
    type: Types.SIGN_UP,
    payload: {
      username,
      content
    }
  };
}
