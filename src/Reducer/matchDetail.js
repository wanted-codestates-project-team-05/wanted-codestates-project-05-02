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
    url: `https://server-cors-wanted.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/matches/${matchId}`,
    headers: {
      Authorization: process.env.REACT_APP_NEXON_AUTHORIZATION,
    },
  };
  await axios(config)
    .then(function (response) {
      dispatch(getMatchDetailSuccess(response.data));
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
