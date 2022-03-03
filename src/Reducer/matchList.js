const axios = require('axios');

const initialState = {
  userMatchList: {
    loading: false,
    error: null,
    data: null,
  },
  matchList: {
    loading: false,
    error: null,
    soloData: null,
    teamData: null,
  },
};

const GET_USER_MATCH_LIST = 'GET_USER_MATCH_LIST';
const GET_USER_MATCH_LIST_SUCCESS = 'GET_USER_MATCH_LIST_SUCCESS';
const GET_USER_MATCH_LIST_FAILURE = 'GET_USER_MATCH_LIST_FAILURE';
const GET_MATCH_LIST = 'GET_USER_MATCH_LIST';
const GET_MATCH_LIST_SUCCESS = 'GET_USER_MATCH_LIST_SUCCESS';
const GET_MATCH_LIST_FAILURE = 'GET_USER_MATCH_LIST_FAILURE';

const getUserMatchListSuccess = (data) => ({
  type: GET_USER_MATCH_LIST_SUCCESS,
  payload: data,
});

const getUserMatchListFailure = (error) => ({
  type: GET_USER_MATCH_LIST_FAILURE,
  payload: error,
});

export const fetchUserMatchList = (userID) => async (dispatch) => {
  dispatch({ type: GET_USER_MATCH_LIST });
  const config = {
    method: 'get',
    url: `api/kart/v1.0/users/${userID}/matches?start_date=&end_date= &offset=0&limit=200&match_types=`,
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTA5MTM5NjMxNyIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTM5MyIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE2NDYyODA4NDksImV4cCI6MTY2MTgzMjg0OSwiaWF0IjoxNjQ2MjgwODQ5fQ.hBFvBAU-cmF5sM4CdmXAIDqEsRwChvzcWnriUzR4Si8',
    },
  };
  await axios(config)
    .then(function (response) {
      dispatch(getUserMatchListSuccess(response.data));
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      dispatch(getUserMatchListFailure(error));
      console.log(error);
    });
};

const getMatchListSuccess = (matchType, data) => ({
  type: GET_MATCH_LIST_SUCCESS,
  payload: data,
  meta: matchType,
});

const getMatchListFailure = (error) => ({
  type: GET_MATCH_LIST_FAILURE,
  payload: error,
});

export const fetchMatchList = (matchType) => async (dispatch) => {
  const matchTypeId =
    matchType === 'soloData'
      ? '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a'
      : 'effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e';
  dispatch({ type: GET_MATCH_LIST });
  const config = {
    method: 'get',
    url: `api/kart/v1.0/matches/all?start_date=&end_date=&offset=0&limit=10&match_types=${matchTypeId}`,
    headers: {
      Authorization:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMTA5MTM5NjMxNyIsImF1dGhfaWQiOiIyIiwidG9rZW5fdHlwZSI6IkFjY2Vzc1Rva2VuIiwic2VydmljZV9pZCI6IjQzMDAxMTM5MyIsIlgtQXBwLVJhdGUtTGltaXQiOiI1MDA6MTAiLCJuYmYiOjE2NDYyODA4NDksImV4cCI6MTY2MTgzMjg0OSwiaWF0IjoxNjQ2MjgwODQ5fQ.hBFvBAU-cmF5sM4CdmXAIDqEsRwChvzcWnriUzR4Si8',
    },
  };
  await axios(config)
    .then(function (response) {
      dispatch(getMatchListSuccess(matchType, response.data));
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      dispatch(getMatchListFailure(error));
      console.log(error);
    });
};

export default function MatchList(state = initialState, action) {
  switch (action.type) {
    case GET_USER_MATCH_LIST:
      return {
        ...state,
        userMatchList: {
          ...state,
          loading: true,
        },
      };
    case GET_USER_MATCH_LIST_SUCCESS:
      return {
        ...state,
        userMatchList: {
          ...state,
          loading: false,
          data: action.payload,
        },
      };
    case GET_USER_MATCH_LIST_FAILURE:
      return {
        ...state,
        userMatchList: {
          ...state,
          loading: false,
          data: null,
          error: action.payload,
        },
      };
    case GET_MATCH_LIST:
      return {
        ...state,
        matchList: {
          ...state,
          loading: true,
        },
      };
    case GET_MATCH_LIST_SUCCESS:
      return {
        ...state,
        matchList: {
          ...state,
          loading: false,
          [action.meta]: action.payload,
        },
      };
    case GET_MATCH_LIST_FAILURE:
      return {
        ...state,
        matchList: {
          ...state,
          loading: false,
          [action.meta]: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
