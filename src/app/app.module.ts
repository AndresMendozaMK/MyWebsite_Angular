import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

//Rutas
import { routing, appRoutingProviders } from './app.routing';

//Componentes
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    MyProjectsComponent,
  ],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders],
})
export class AppModule {}
