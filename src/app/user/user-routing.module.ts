import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core-module/guards/auth.guard';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';



const routes: Routes = [
    {
        path: 'login',
        canActivate: [AuthGuard],
        component: LoginPageComponent,
        data: {
            isLoggedIn: false,
            title: 'Register User'
        }
    },
    {
        path: 'register',
        canActivate: [AuthGuard],
        component: RegisterPageComponent,
        data: {
            isLoggedIn: false,
            title: 'Login'
        }
    }
]



export const UserRoutingModule = RouterModule.forChild(routes);

