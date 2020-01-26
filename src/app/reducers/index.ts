import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {ITaskState} from '../resurses/interfaisis';
import {taskNode, taskReducer} from './taskReducer/task.reducer';

export interface State {
  [taskNode] : ITaskState
}

export const reducers: ActionReducerMap<State> = {
  [taskNode] : taskReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
