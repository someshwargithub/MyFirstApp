import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [

    {path:'home',component:DashboardComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'contactus',component:ContactusComponent}
];
