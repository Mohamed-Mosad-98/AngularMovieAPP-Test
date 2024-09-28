import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';



@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent,
    AboutComponent,
    

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
