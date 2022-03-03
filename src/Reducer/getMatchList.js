const initialState = {
  success: false,
  data: null,
  loading: false,
  error: null,
};

const GET_MATCH_LIST = 'GET_MATCH_LIST';
const GET_MATCH_LIST_SUCCESS = 'GET_MATCH_LIST_SUCCESS';
const GET_MATCH_LIST_FAILURE = 'GET_MATCH_LIST_FAILURE';

export const fetchMatchList = () => async (dispatch) => {
  dispatch({ type: GET_MATCH_LIST });
  const axios = require('axios');
  const config = {
    method: 'get',
    url: 'api/kart/v1.0/users/1963163935/matches?start_date=&end_date= &offset=0&limit=200&match_types=',
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTA5MTM5NjMxNyIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTM5MyIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE2NDYyODA4NDksImV4cCI6MTY2MTgzMjg0OSwiaWF0IjoxNjQ2MjgwODQ5fQ.hBFvBAU-cmF5sM4CdmXAIDqEsRwChvzcWnriUzR4Si8',
    },
  };
  await axios(config)
    .then(function (response) {
      dispatch(getMatchListSuccess(response.data));
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      dispatch(getMatchListFailure(error));
      console.log(error);
    });
};

const getMatchListSuccess = (data) => ({
  type: GET_MATCH_LIST_SUCCESS,
  payload: data,
});

const getMatchListFailure = (error) => ({
  type: GET_MATCH_LIST_FAILURE,
  payload: error,
});

export default function getMatchList(state = initialState, action) {
  switch (action.type) {
    case GET_MATCH_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_MATCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      };
    case GET_MATCH_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        success: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
