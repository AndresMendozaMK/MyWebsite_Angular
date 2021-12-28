import { ModuleWithProviders } from '@angular/core';
import moduleWithProviders from '@angular/core/schematics/migrations/module-with-providers';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

var appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'acerca-de-mi', component: AboutComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', component: ErrorComponent },
  { path: 'mis-proyectos', component: MyProjectsComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<unknown> =
  RouterModule.forRoot(appRoutes);
