export class Habit {
  id: number;
  habit: string;	
  actCheck: boolean;
  constructor(id: number, habit: string, actCheck: boolean) {
    this.id = id;
    this.habit = habit;
    this.actCheck = actCheck;
  }
}
