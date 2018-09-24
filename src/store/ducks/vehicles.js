// Action Types

export const Types = {
  ADD_VEHICLE: "vehicles/ADD_VEHICLE"
};

// Reducer

export default function reducer(state = [], action) {
  switch (action.type) {
    case Types.ADD_VEHICLE:
      return [
        ...state,
        { id: action.payload.id, attributes: action.payload.attributes }
      ];
    default:
      return state;
  }
}

// Action Creators

export function addVehicle(id, attributes) {
  return {
    type: Types.ADD_VEHICLE,
    payload: {
      id,
      attributes
    }
  };
}
