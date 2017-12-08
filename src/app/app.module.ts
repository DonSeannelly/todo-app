import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Router
import { routes } from './app.routes';

//Other

// Services
import { ToDoService } from './resources/services/to-do.service';

// Components
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';



@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
