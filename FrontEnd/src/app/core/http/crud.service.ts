import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpHelper } from '../helpers/http.helper';
import { environment } from '@environments/environment';

export abstract class ApiBaseService {
  protected get basePath(): string {
    if (!this.baseUrl || this.baseUrl.length === 0) {
      return this.apiBasePath;
    }
    return `${this.apiBasePath}/${this.apiUrl}/${environment.apiVersion}/${this.baseUrl}`;
  }

  constructor(
    protected httpClient: HttpClient,
    protected baseUrl = '',
    protected apiBasePath: string = environment.defaultApiBasePath,
    protected apiVersion = environment.apiVersion,
    protected apiUrl = environment.apiUrl
  ) {}
}

export class CrudBaseService extends ApiBaseService {
  constructor(
    protected override baseUrl: string,
    protected override httpClient: HttpClient,
    protected override apiBasePath: string = environment.defaultApiBasePath
  ) {
    super(httpClient, apiBasePath, baseUrl);
  }

  get(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.basePath}/${id}`).pipe(map((res: any) => res && res.data));
  }

  list(): Observable<any> {
    return this.httpClient.get<any>(`${this.basePath}`).pipe(map((res: any) => res));
  }

  filter(filterParams: any): Observable<any[]> {
    return this.httpClient
      .get<any[]>(`${this.basePath}`, {
        params: HttpHelper.objectToHttpParams({ ...filterParams })
      })
      .pipe(map((res: any) => res));
  }

  create(body: any): Observable<any> {
    return this.httpClient.post(`${this.basePath}`, body);
  }

  update(body: any): Observable<any> {
    return this.httpClient.post(`${this.basePath}`, body);
  }

  updateByPut(body: any): Observable<any> {
    return this.httpClient.put(`${this.basePath}`, body);
  }

  delete(id: string, key: string): Observable<any> {
    return this.httpClient.delete(`${this.basePath}?${key}=${id}`);
  }
}
