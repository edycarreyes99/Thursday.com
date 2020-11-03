import {Observable} from 'rxjs';

export interface IGlobalService {

  // Method to generate an ID
  generateID(lengthID: number, prefix: string): string;

  // Method that returns all the projects
  getProjects(): Observable<any>;

  // Method that returns a project by PID
  getProject(pid: string): Observable<any>;

  // Method that returns all the tasks
  getTasks(): Observable<any>;

  // Method that returns a task by TID
  getTask(tid: string): Observable<any>;

  // Method that returns all the users
  getUsers(): Observable<any>;

  // Method that returns a user by UID
  getUser(uid: string): Observable<any>;

  // Method that returns all the task categories
  getTaskCategories(): Observable<any>;

  // Method that returns a task category by TCID
  getTaskCategory(tcid: string): Observable<any>;
}
