import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  
  // {
  //   path: '**',
  //   // component: 'TO DO: add the error page',
  //   data: {
  //     title: '404 Page'
  //   }
  // }
];


export const AppRoutingModule = RouterModule.forRoot(routes);
