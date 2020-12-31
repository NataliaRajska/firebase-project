import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'registration',
        pathMatch: 'full'
    },
    {
        path: 'registration',
        loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
    },
    {
        path: 'loginpage',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
