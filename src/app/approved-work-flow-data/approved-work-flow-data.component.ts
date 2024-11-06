import { Component, inject, Inject, OnInit } from '@angular/core';
import { ApprovedWorkFlowDataIface } from '../model/sample';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApprovedWorkFlowDataService } from './approved-work-flow-data.service';
import { CommonModule } from '@angular/common';
import { ITable } from '../model/table';

@Component({
  selector: 'app-approved-work-flow-data',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './approved-work-flow-data.component.html',
  styleUrl: './approved-work-flow-data.component.scss'
})
export class ApprovedWorkFlowDataComponent implements OnInit {

  workFlow!: FormGroup;
  workFlowData: ApprovedWorkFlowDataIface[] = [];
  private fb: FormBuilder = inject(FormBuilder)
  tableValues:ITable[]= [];

  constructor(private serviceData: ApprovedWorkFlowDataService) { }



  ngOnInit(): void {
    this.formGroup()
    this.allDatas()
  }


  allDatas() {
    this.serviceData.getData()

      .subscribe(
        {
          next: (res: ApprovedWorkFlowDataIface[]) => this.workFlowData = res,
          error: (err: any) => console.log("err", err)

        }
      )
  }

  formGroup() {
    this.workFlow = this.fb.group({
      divisionName: ['', [Validators.required]],
      employeeName: ['', [Validators.required]],
      epfNumber: ['', Validators.required]


    })
  }
  onSubmit() {
    console.log(this.workFlow.value);
    this.tableValues.push(this.workFlow.value);
  }
}
