import {ITaskState} from '../../resurses/interfaisis';
import {TaskActions, taskActionsType} from './task.actions';

export const taskNode = 'tasks';

const initialState: ITaskState = {
  tasks: []
}

export const taskReducer = (state = initialState, action: TaskActions) => {
  switch (action.type) {
    case taskActionsType.add:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.payload
        ]
      };
    case taskActionsType.remove:
      return {
        ...state,
        tasks: state.tasks.filter(el => el.id != action.payload)
      };
    case taskActionsType.update:
      return {
        ...state,
        tasks : state.tasks.map(t => t.id === action.payload.id ?
          {...t, location : action.payload.location, hint : action.payload.hint} : t
        )
      };
    default :
      return state;
  }

};
