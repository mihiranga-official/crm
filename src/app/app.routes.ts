import { Routes } from '@angular/router';
import { OrderFormComponent } from './Good Issues/order-form.component';
import { GoodHandOverToCustomerComponent } from './good-hand-over-to-customer/good-hand-over-to-customer.component';


export const routes: Routes = [

{path:'goodIssuesToCustomer',component:GoodHandOverToCustomerComponent},
{path:'',component:OrderFormComponent}
 
];
