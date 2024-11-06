import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApprovedWorkFlowDataIface } from '../model/sample';

@Injectable({
  providedIn: 'root'
})
export class ApprovedWorkFlowDataService {

  private baseUrl:string='assets/MockData/approvedWorkFlowData.json';
  private https:HttpClient=inject(HttpClient)


  getData():Observable<ApprovedWorkFlowDataIface[]>{
    return this.https.get<ApprovedWorkFlowDataIface[]>(this.baseUrl)
    .pipe(
      tap(datas=>console.log('Sample',datas)
      )
    )
  }
}
