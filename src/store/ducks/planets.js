// Action Types

export const Types = {
  ADD_PLANET: "planets/ADD_PLANET"
};

// Reducer

export default function reducer(state = [], action) {
  switch (action.type) {
    case Types.ADD_PLANET:
      return [
        ...state,
        { id: action.payload.id, attributes: action.payload.attributes }
      ];
    default:
      return state;
  }
}

// Action Creators

export function addPlanet(id, attributes) {
  return {
    type: Types.ADD_PLANET,
    payload: {
      id,
      attributes
    }
  };
}
