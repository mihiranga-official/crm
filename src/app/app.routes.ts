import { Routes } from '@angular/router';
import { OrderFormComponent } from './Good Issues/order-form.component';
import { GoodHandOverToCustomerComponent } from './good-hand-over-to-customer/good-hand-over-to-customer.component';
import { SparePartRequestComponent } from './spare-part-request/spare-part-request.component';


export const routes: Routes = [

{path:'goodIssuesToCustomer',component:OrderFormComponent},
{path:'',component:OrderFormComponent},
{path:'sparepartsrequest',component:SparePartRequestComponent}
 
];




