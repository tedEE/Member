import {ITask} from '../../resurses/interfaisis';

export enum taskActionsType {
  add = '[TASK] add',
  remove = '[TASK] remove',
  update = '[TASK] update',
}

export class AddTaskAction {
  readonly type = taskActionsType.add
  constructor(public payload : ITask){}
}

export class DelTaskAction {
  readonly type = taskActionsType.remove
  constructor(public payload : string){}
}

export class UpdateTaskAction {
  readonly type = taskActionsType.update
  constructor(public payload : ITask){}
}

export type TaskActions = AddTaskAction | DelTaskAction | UpdateTaskAction
