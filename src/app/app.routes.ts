import { Routes } from '@angular/router'; 
import { PublicLayout } from './layouts/public-layout/public-layout';
import { PrivateLayout } from './layouts/private-layout/private-layout';
import { WhatIsSnagpad } from './pages/public/what-is-snagpad/what-is-snagpad';
import { HowItWorks } from './pages/public/how-it-works/how-it-works';
import { Blog } from './pages/public/blog/blog';
import { ContactUs } from './pages/public/contact-us/contact-us';
import { TermsOfService } from './pages/public/terms-of-service/terms-of-service';
import { JobSeeker } from './pages/public/job-seeker/job-seeker';
import { Login } from './pages/public/login/login';
import { roleGuard } from './core/guards/role.guard';
import { guestGuard } from './core/guards/guest.guard';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
export const routes: Routes = [

  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./pages/public/home/home').then(m => m.Home)
      },
      {path:'login', canActivate: [guestGuard], component: Login},
      {path:'what-is-snagpad', component: WhatIsSnagpad},
      {path:'how-it-works', component: HowItWorks},
      {path:'blog', component: Blog},
      {path:'contact-us', component: ContactUs},
      {path:'terms-of-service', component: TermsOfService},
      {path:'job-seeker', component: JobSeeker} 
    ]
  },
  {
    path: 'admin',
    canActivate: [roleGuard('ADMIN')],
    component: AdminLayout,
    children:[
     {
      path: '',
      loadChildren: () =>import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
     }
    ],
    
  },
  {
    path: 'agency',
    canActivate: [roleGuard('AGENCY')],
    loadChildren: () => 
      import('./features/agency/agency.routes').then(m => m.AGENCY_ROUTES)
  },
  {
    path: 'coach',
    canActivate: [roleGuard('COACH')],
    loadChildren: () => 
      import('./features/coach/coach.routes').then(m => m.COACH_ROUTES)
  },
  {
    path: 'client',
    canActivate: [roleGuard('CLIENT')],
    loadChildren: () => 
      import('./features/client/client.routes').then(m => m.CLIENT_ROUTES)
  },









  // 2. PRIVATE LAYOUT: Jo login ke baad dashboard me dikhega
  {
    path: 'app',
    component: PrivateLayout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/private/dashboard/dashboard').then(m => m.Dashboard)
      }
    ]
  },

  // Agar koi galat URL dale toh wapas home par bhej do (404 Fallback)
  { path: '**', redirectTo: 'home' }
];
