import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Route } from '@angular/router';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { CompletatiComponent } from './completati/completati.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Route[] = [
    {
      path: "",
      component: TodosComponent
    },

    {
      path: "completati",
      component: CompletatiComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CompletatiComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
