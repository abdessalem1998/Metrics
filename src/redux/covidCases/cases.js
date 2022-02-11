const FETCH_CASES = 'metrics/covidCases/FETCH_CASES';
const FILTER_CASES_NAME = 'metrics/covidCases/FETCH_FILTER_CASES_NAME';

const initialState = [];

export const fetchCases = (payload) => ({
  type: FETCH_CASES,
  payload,
});

export const filterCasesByName = (payload) => ({
  type: FILTER_CASES_NAME,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CASES:
      return action.payload;

    case FILTER_CASES_NAME: {
      const newState = state.map((country) => {
        if (country.name.toUpperCase().indexOf(action.payload.toUpperCase()) > -1) {
          return { ...country, filtered: false };
        }
        return { ...country, filtered: true };
      });
      return newState;
    }

    default:
      return state;
  }
};

export default reducer;
