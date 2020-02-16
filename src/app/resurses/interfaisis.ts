export interface ITask{
  id : string,
	location : string,
	hint : string,
	date? : any
}

export interface ITaskState {
  tasks : Array<ITask>
}

export type selectTime = string | number

export interface ITimeSeting {
  latString ?: string
  stringTime : string,
  numberTime : number
}
