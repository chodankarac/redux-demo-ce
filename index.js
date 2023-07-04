const BUY_CAKE = "BUY_CAKE";

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
//Action is with the type property and action creater is a function with the type property

//Reducer:
//(previousState,action)=>newState

const initialState = {
  numOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }; //create copy of state and then reduce numOfCakes
    default:
      return state;
  }
};
