const axios = require('axios');

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const GET_MATCH_DETAIL = 'GET_MATCH_DETAIL';
const GET_MATCH_DETAIL_SUCCESS = 'GET_MATCH_DETAIL_SUCCESS';
const GET_MATCH_DETAIL_FAILURE = 'GET_MATCH_DETAIL_FAILURE';

const getMatchDetailSuccess = (data) => ({
  type: GET_MATCH_DETAIL_SUCCESS,
  payload: data,
});

const getMatchDetailFailure = (error) => ({
  type: GET_MATCH_DETAIL_FAILURE,
  payload: error,
});

export const fetchMatchDetail = (matchId) => async (dispatch) => {
  dispatch({ type: GET_MATCH_DETAIL });
  const config = {
    method: 'get',
    url: `api/kart/v1.0/matches/${matchId}`,
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTA5MTM5NjMxNyIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTM5MyIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE2NDYyODA4NDksImV4cCI6MTY2MTgzMjg0OSwiaWF0IjoxNjQ2MjgwODQ5fQ.hBFvBAU-cmF5sM4CdmXAIDqEsRwChvzcWnriUzR4Si8',
    },
  };
  await axios(config)
    .then(function (response) {
      dispatch(getMatchDetailSuccess(response.data));
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      dispatch(getMatchDetailFailure(error));
      console.log(error);
    });
};

export default function matchDetail(state = initialState, action) {
  switch (action.type) {
    case GET_MATCH_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case GET_MATCH_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_MATCH_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
}
