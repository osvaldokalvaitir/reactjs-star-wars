// Action Types

export const Types = {
  ADD_STARSHIP: "starships/ADD_STARSHIP"
};

// Reducer

export default function reducer(state = [], action) {
  switch (action.type) {
    case Types.ADD_STARSHIP:
      return [
        ...state,
        { id: action.payload.id, attributes: action.payload.attributes }
      ];
    default:
      return state;
  }
}

// Action Creators

export function addStarship(id, attributes) {
  return {
    type: Types.ADD_STARSHIP,
    payload: {
      id,
      attributes
    }
  };
}
