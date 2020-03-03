import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {ISettingTimeState, ITaskState} from '../resurses/interfaisis';
import {taskNode, taskReducer} from './taskReducer/task.reducer';
import {settingTimeReduser, timeSettingNode} from './settingReduser/setting.reduser';

export interface State {
  [taskNode] : ITaskState,
  [timeSettingNode] : ISettingTimeState
}

export const reducers: ActionReducerMap<State> = {
  [taskNode] : taskReducer,
  [timeSettingNode] : settingTimeReduser
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
