import reducer from './cases';

describe('unit tests for pure functions in the Redux code', () => {
  test('default case', () => {
    // Arrange
    const state = [];
    const action = {
      type: undefined,
    };

    // Act
    const result = reducer(state, action);

    // Assert
    expect(result).toStrictEqual([]);
  });

  test('fetchData case', () => {
    // Arrange
    const state = [];
    const FETCH_CASES = 'metrics/covidCases/FETCH_CASES';
    const payload = [
      {
        confirmedCases: 1000,
        id: 'country1',
        name: 'country1',
      },
      {
        confirmedCases: 2000,
        id: 'country2',
        name: 'country2',
      },
    ];
    const action = {
      type: FETCH_CASES,
      payload,
    };

    // Act
    const result = reducer(state, action);

    // Assert
    expect(result).toStrictEqual(payload);
  });

  test('filterData case', () => {
    // Arrange
    const state = [
      {
        confirmedCases: 1000,
        id: 'country1',
        name: 'country1',
      },
      {
        confirmedCases: 2000,
        id: 'country2',
        name: 'country2',
      },
    ];
    const FILTER_CASES_NAME = 'metrics/covidCases/FETCH_FILTER_CASES_NAME';
    const payload = 'country1';
    const action = {
      type: FILTER_CASES_NAME,
      payload,
    };

    // Act
    const result = reducer(state, action);

    // Assert
    const output = [
      {
        confirmedCases: 1000,
        id: 'country1',
        name: 'country1',
        filtered: false,
      },
      {
        confirmedCases: 2000,
        id: 'country2',
        name: 'country2',
        filtered: true,
      },
    ];
    expect(result).toStrictEqual(output);
  });
});
