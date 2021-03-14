import Entity from "./entity.js";

export default class Task extends Entity {
  constructor(uuid, status, name, date, time, task_type, priority) {
    super(uuid);

    this.status = status
    this.name = name;
    this.date = date;
    this.time = time;
    this.task_type = task_type;
    this.priority = priority;
    
  }
}
