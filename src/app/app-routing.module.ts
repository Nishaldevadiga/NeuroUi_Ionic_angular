import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './Home/home/home.component';
import { RegisterComponent } from './Register/register/register.component';
import { LoginComponent } from './Login/login/login.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'home',component:HomeComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
