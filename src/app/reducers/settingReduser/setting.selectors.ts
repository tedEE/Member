import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ISettingTimeState, ITimeSetting} from '../../resurses/interfaisis';
import {timeSettingNode} from './setting.reduser';

export const selectorSettingFeature = createFeatureSelector<ISettingTimeState>(timeSettingNode)
export const selectTimeSettings = createSelector(
  selectorSettingFeature,
  (state : ISettingTimeState) : Array<ITimeSetting> => state.settings
)
