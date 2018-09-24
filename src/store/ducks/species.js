// Action Types

export const Types = {
  ADD_SPECIE: "specie/ADD_SPECIE"
};

// Reducer

export default function reducer(state = [], action) {
  switch (action.type) {
    case Types.ADD_SPECIE:
      return [
        ...state,
        { id: action.payload.id, attributes: action.payload.attributes }
      ];
    default:
      return state;
  }
}

// Action Creators

export function addSpecie(id, attributes) {
  return {
    type: Types.ADD_SPECIE,
    payload: {
      id,
      attributes
    }
  };
}
