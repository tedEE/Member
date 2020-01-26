export interface ITask{
  id : string,
	location : string,
	hint : string,
	date? : any
}

export interface ITaskState {
  tasks : Array<ITask>
}
