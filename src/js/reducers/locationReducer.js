export default function reducer(state={
    locations : [],
    fetching : false,
    fetched : false,
    error : null,
  }, action) {

  switch (action.type) {
    case 'GET_LOCATION': {
      return {
        ...state,
        fetching : true,
        locations : [],
        fetched : false,
        error : null,
      }
    }
    break;
    case 'GET_LOCATION_SUCCESS': {
      return {
        ...state,
        fetched : true,
        fetching : false,
        error : null,
        locations : action.payload,
      }
    }
    break;
    case 'GET_LOCATION_FAILED': {
      return {
        ...state,
        locations : [],
        fetching : false,
        fetched : true,
        error : action.payload,
      }
    }
    break;
  }

  return state
}
