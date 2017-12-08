import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Router
import { routes } from './app.routes';

//Other
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Services
import { ToDoService } from './resources/services/to-do.service';
import { InMemoryDataService } from './resources/services/in-memory-data.service';

// Components
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { HomeViewComponent } from './home-view/home-view.component';



@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    HomeViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routes
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
