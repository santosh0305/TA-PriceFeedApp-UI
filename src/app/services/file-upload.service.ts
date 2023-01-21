import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient:HttpClient) { }

  upload(file : any):Observable<any> {

    const formData = new FormData();

    formData.append("file", file, file.name);

    return this.httpClient.post(environment.apiFilesUrl, formData)
  }
}
