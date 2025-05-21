import type { User } from "../../enetities/user";
import { Task } from "../../enetities/task";

export class Database{

    private Userlist : User[];
    private Tasklist : Task[];

    constructor(){
        this.Tasklist = [];
        this.Userlist = [];
    }
      public createTask(task : Task){
        this.Tasklist.push(task);
        console.log(this.Tasklist);
      }      

    public deleteTask(taskID : number){
      this.Tasklist = this.Tasklist.filter((task) => task.getId() != taskID) 
      }            


    public getAllTasks(userID: number){
          this.Tasklist = this.Tasklist.filter((task) => task.getUserID() != userID) 
    }


    public creatUser(user: User){
        this.Userlist.push(user)
        console.log(this.Userlist);
    }
}


