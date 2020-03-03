import {ISettingTimeState} from '../../resurses/interfaisis';
import {SettingActions, settingActionsType} from './setting.actions';

export const timeSettingNode = 'timeSettings'

const initialState : ISettingTimeState = {
  settings : []
}

export const settingTimeReduser = (state = initialState, action : SettingActions) => {
  switch (action.type) {
    case settingActionsType.add :
      return {
        ...state,
        settings : [
          ...state.settings,
          {
            id : action.payload.id,
            stringTime : action.payload.stringTime,
            numberTime : action.payload.numberTime
          }
        ]
      }
      break
    case settingActionsType.remove :
      return {
        ...state,
        settings : state.settings.filter(el => el.id != action.payload)
      }
      break
    default :
      return state
  }
}
