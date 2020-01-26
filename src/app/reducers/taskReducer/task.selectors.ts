import {createFeatureSelector, createSelector} from '@ngrx/store';
import {taskNode} from './task.reducer';
import {ITask, ITaskState} from '../../resurses/interfaisis';

export const selectorTaskFeature = createFeatureSelector<ITaskState>(taskNode)
export const selectTask = createSelector(
  selectorTaskFeature,
  (state : ITaskState) : Array<ITask> => state.tasks
)
// закончил здесь
