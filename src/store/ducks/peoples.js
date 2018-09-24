// Action Types

export const Types = {
  ADD_PEOPLE: "peoples/ADD_PEOPLE"
};

// Reducer

export default function reducer(state = [], action) {
  switch (action.type) {
    case Types.ADD_PEOPLE:
      return [
        ...state,
        { id: action.payload.id, attributes: action.payload.attributes }
      ];
    default:
      return state;
  }
}

// Action Creators

export function addPeople(id, attributes) {
  return {
    type: Types.ADD_PEOPLE,
    payload: {
      id,
      attributes
    }
  };
}
