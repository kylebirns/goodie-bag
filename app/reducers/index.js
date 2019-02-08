import axios from 'axios'

const initialState = {candy: []}

//Actions
const GOT_CANDIES_FROM_SERVER = 'GOT_CANDIES_FROM_SERVER';

//Action Creators
export const gotCandiesFromServer = (candy) => {
  return {
      type: GOT_CANDIES_FROM_SERVER,
      candy,
  }
}

//Thunk creators
export const candiesThunk = () => {
  return async (dispatch) => {
      const response = await axios.get('/api/candies');
      const candies = response.data;
      dispatch(gotCandiesFromServer(candies))
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES_FROM_SERVER:
      return {
        ...state, candy: action.candy
      }
    default:
      return state
  }
}

export default rootReducer
