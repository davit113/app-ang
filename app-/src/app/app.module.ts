import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BasicCartComponent } from './basic-cart/basic-cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PersonComponent } from './person/person.component';



const appRoutes: Routes =[
    {path: '', component: HomePageComponent},
    {path: 'person/:id', component: PersonComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    BasicCartComponent,
    // CardTstComponent,
    HomePageComponent,
    PersonComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
