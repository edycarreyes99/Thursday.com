import {Injectable} from '@angular/core';
import {IGlobalService} from '../../interfaces/global-service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements IGlobalService {

  // Variable for the local api
  SERVER_URL = 'http://localhost:8080/api/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  // Method to generate an ID
  public generateID(lengthID: number, prefix: string): string {
    let id = `${prefix}-`;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    const charLength = chars.length;
    for (let i = 0; i < lengthID; i++) {
      id += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return id;
  }

  // Method that returns all the projects
  public getProjects(): Observable<any> {
    return this.httpClient.get(this.SERVER_URL + 'projects');
  }

  // Method that returns a project by PID
  public getProject(pid: string): Observable<any> {
    return this.httpClient.get(`${this.SERVER_URL + 'projects'}/${pid}`);
  }

  // Method that returns all the tasks
  public getTasks(): Observable<any> {
    return this.httpClient.get(this.SERVER_URL + 'tasks');
  }

  // Method that returns a task by TID
  public getTask(tid: string): Observable<any> {
    return this.httpClient.get(`${this.SERVER_URL + 'tasks'}/${tid}`);
  }

  // Method that returns all the users
  public getUsers(): Observable<any> {
    return this.httpClient.get(this.SERVER_URL + 'users');
  }

  // Method that returns a user by UID
  public getUser(uid: string): Observable<any> {
    return this.httpClient.get(`${this.SERVER_URL + 'users'}/${uid}`);
  }

  // Method that returns all the task categories
  public getTaskCategories(): Observable<any> {
    return this.httpClient.get(this.SERVER_URL + 'taskCategories');
  }

  // Method that returns a task category by TCID
  public getTaskCategory(tcid: string): Observable<any> {
    return this.httpClient.get(`${this.SERVER_URL + 'taskCategories'}/${tcid}`);
  }
}
