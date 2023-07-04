const redux = require("redux"); //1.Holds application state //import redux
const createStore = redux.createStore; //1.Holds application state //create store
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

const store = createStore(reducer); //1.Holds application state
console.log("Initial state", store.getState()); //2.Allow access to state via getState() i.e. here provides initial state of app because state is not updated
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState())); //subsribe changes in the store//4.registers listeners via subscribe
store.dispatch(buyCake()); //3.Allow state to be updated via dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe(); //5.handle unregistering of listeners
