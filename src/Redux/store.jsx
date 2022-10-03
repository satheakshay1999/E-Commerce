// import { createStore } from "redux"; //  as it is dprecated so we can replace it by configureStore 
// import { configureStore } from '@reduxjs/toolkit'; // added dependencies npm install @reduxjs/toolkit 
import rootReducer from "./Reducers";
import { createStore } from '@reduxjs/toolkit';

const store =createStore(rootReducer);

export default store ;
