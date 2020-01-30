import {ITaskState} from '../../resurses/interfaisis';
import {TaskActions, taskActionsType} from './task.actions';

export const taskNode = 'state';

// const initialState: ITaskState = {
//   tasks: [{
//     id: '1',
//     location: 'location',
//     hint: 'hint'
//   }]
// }

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
        tasks : [
          ...state.tasks,
          action.payload
        ]
      };
    default :
      return state;
  }

};
