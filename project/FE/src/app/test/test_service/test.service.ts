import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Subject} from '../subject';
import {Test} from '../test';
import {Message} from '../message';



@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private httpClient: HttpClient) {
  }

  private getAllTestApi = 'http://localhost:8080/getAllTest';
  private uploadFile = 'http://localhost:8080/importTest';
  private deleteTest = 'http://localhost:8080/deleteTest';
  private getAllSubjectApi = 'http://localhost:8080/getAllSubject';
  private addTestApi = 'http://localhost:8080/addTest';
  URL = 'http://localhost:8080';


  getAllTest(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(this.getAllTestApi);
  }

  upload(file: File): Observable<Message> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.httpClient.post<Message>(this.uploadFile, formData);
  }

  deleteTests(list: number[]): Observable<any> {
    return this.httpClient.post<any>(this.deleteTest, list);
  }

  getAllSubject(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(this.getAllSubjectApi);
  }

  addTest(test: Test): Observable<Message> {
    return this.httpClient.post<Message>(this.addTestApi, test);
  }

  findById(testId: number): Observable<Test> {
    return this.httpClient.get<Test>(this.URL + '/getTestById/' + testId);
  }

}
