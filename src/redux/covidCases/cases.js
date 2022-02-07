const FETCH_CASES = 'metrics/covidCases/FETCH_CASES';

const initialState = [];

export const fetchCases = (payload) => ({
  type: FETCH_CASES,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CASES:
      return action.payload;

    default:
      return state;
  }
};
