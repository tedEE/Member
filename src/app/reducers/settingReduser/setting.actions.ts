import {ITimeSetting, selectTime} from '../../resurses/interfaisis';
import {AddTaskAction, DelTaskAction, UpdateTaskAction} from '../taskReducer/task.actions';


export enum settingActionsType {
  add = '[Setting] add',
  remove = '[Setting] remove'
}

export class AddSettingAction {
  readonly type = settingActionsType.add
  constructor(public payload : ITimeSetting){}
}

export class DelSettingAction {
  readonly type = settingActionsType.remove
  constructor(public payload : selectTime){}
}

export type SettingActions = AddSettingAction | DelSettingAction
