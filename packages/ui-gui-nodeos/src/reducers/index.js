import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import { connectRouter } from 'connected-react-router';

import { counterReducer } from './counter';

import { combinedEpic as infoPageEpic, combinedReducer as infoPageReducer } from '../pages/InfoPage/InfoPageReducer';
import { combinedEpic as blocklistPageEpic, combinedReducer as blocklistPageReducer } from '../pages/BlocklistPage/BlocklistPageReducer';
import { combinedEpic as blockdetailPageEpic, combinedReducer as blockdetailPageReducer } from '../pages/BlockdetailPage/BlockdetailPageReducer';


export const rootEpic = combineEpics(
  infoPageEpic,
  blocklistPageEpic,
  blockdetailPageEpic,
);

export const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  infoPage: infoPageReducer,
  blocklistPage: blocklistPageReducer,
  blockdetailPage: blockdetailPageReducer,
})
