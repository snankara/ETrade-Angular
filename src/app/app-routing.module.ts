import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"products", component:ProductComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"", component:HomeComponent},
  {path:"", redirectTo:"", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
