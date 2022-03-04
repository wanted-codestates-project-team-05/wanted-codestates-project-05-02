const axios = require('axios');

const initialState = {
  userMatchList: {
    loading: false,
    error: null,
    data: null
  },
  allMatchList: {
    loading: false,
    error: null,
    soloData: null,
    teamData: null
  }
};

const GET_USER_MATCH_LIST = 'GET_USER_MATCH_LIST';
const GET_USER_MATCH_LIST_SUCCESS = 'GET_USER_MATCH_LIST_SUCCESS';
const GET_USER_MATCH_LIST_FAILURE = 'GET_USER_MATCH_LIST_FAILURE';
const GET_MATCH_LIST = 'GET_MATCH_LIST';
const GET_MATCH_LIST_SUCCESS = 'GET_MATCH_LIST_SUCCESS';
const GET_MATCH_LIST_FAILURE = 'GET_MATCH_LIST_FAILURE';

const getUserMatchListSuccess = (data) => ({
  type: GET_USER_MATCH_LIST_SUCCESS,
  payload: data
});

const getUserMatchListFailure = (error) => ({
  type: GET_USER_MATCH_LIST_FAILURE,
  payload: error
});

export const fetchUserMatchList = (useId) => async (dispatch) => {
  dispatch({ type: GET_USER_MATCH_LIST });
  const config = {
    method: 'get',
    url: `https://server-cors-wanted.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/users/${useId}/matches?start_date=&end_date= &offset=0&limit=200&match_types=`,
    headers: {
      Authorization: process.env.REACT_APP_NEXON_AUTHORIZATION
    }
  };
  await axios(config)
    .then(function(response) {
      dispatch(getUserMatchListSuccess(response.data));
    })
    .catch(function(error) {
      dispatch(getUserMatchListFailure(error));
      console.log(error);
    });
};

const getMatchListSuccess = (matchType, data) => ({
  type: GET_MATCH_LIST_SUCCESS,
  payload: data,
  meta: matchType
});

const getMatchListFailure = (error) => ({
  type: GET_MATCH_LIST_FAILURE,
  payload: error
});

export const fetchMatchList = (matchType) => async (dispatch) => {
  const matchTypeId =
    matchType === 'soloData'
      ? '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a'
      : 'effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e';
  dispatch({ type: GET_MATCH_LIST });
  const config = {
    method: 'get',
    url: `https://server-cors-wanted.herokuapp.com/https://api.nexon.co.kr/kart/v1.0/matches/all?start_date=&end_date=&offset=0&limit=200&match_types=${matchTypeId}`,

    headers: {
      Authorization: process.env.REACT_APP_NEXON_AUTHORIZATION
    }
  };
  await axios(config)
    .then(function(response) {
      dispatch(getMatchListSuccess(matchType, response.data));
    })
    .catch(function(error) {
      dispatch(getMatchListFailure(error));
      console.log(error);
    });
};

export default function matchList(state = initialState, action) {
  switch (action.type) {
    case GET_USER_MATCH_LIST:
      return {
        ...state,
        userMatchList: {
          ...state,
          loading: true
        }
      };
    case GET_USER_MATCH_LIST_SUCCESS:
      return {
        ...state,
        userMatchList: {
          ...state,
          loading: false,
          data: action.payload
        }
      };
    case GET_USER_MATCH_LIST_FAILURE:
      return {
        ...state,
        userMatchList: {
          ...state,
          loading: false,
          data: null,
          error: action.payload
        }
      };
    case GET_MATCH_LIST:
      return {
        ...state,
        allMatchList: {
          ...state,
          loading: true
        }
      };
    case GET_MATCH_LIST_SUCCESS:
      return {
        ...state,
        allMatchList: {
          ...state,
          loading: false,
          [action.meta]: action.payload
        }
      };
    case GET_MATCH_LIST_FAILURE:
      return {
        ...state,
        allMatchList: {
          ...state,
          loading: false,
          [action.meta]: null,
          error: action.payload
        }
      };
    default:
      return state;
  }
}
