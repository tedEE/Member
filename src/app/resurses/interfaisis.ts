export interface ITask{
  id : string,
	location : string,
	hint : string,
	date? : any
}

export interface ISettingTimeState {
  settings : Array<ITimeSetting>
}

export interface ITaskState {
  tasks : Array<ITask>
}

export type selectTime = string | number

export interface ITimeSetting {
  id : number | string,
  latString ?: string
  stringTime : string,
  numberTime : number
}
