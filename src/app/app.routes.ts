import { Routes } from '@angular/router';
import { OrderFormComponent } from './Good Issues/order-form.component';
import { GoodHandOverToCustomerComponent } from './good-hand-over-to-customer/good-hand-over-to-customer.component';
import { SparePartRequestComponent } from './spare-part-request/spare-part-request.component';
import { ApprovedWorkFlowDataComponent } from './approved-work-flow-data/approved-work-flow-data.component';


export const routes: Routes = [

{path:'goodIssuesToCustomer',component:OrderFormComponent},
{path:'',component:ApprovedWorkFlowDataComponent},
{path:'sparepartsrequest',component:SparePartRequestComponent},
{path:'approvedWorkFlow',component:ApprovedWorkFlowDataComponent},

 
];




