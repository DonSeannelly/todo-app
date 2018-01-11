import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

//Router
import { routes } from './app.routes';

//Other
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Services
import { ToDoService } from './resources/services/to-do.service';
import { InMemoryDataService } from './resources/services/in-memory-data.service';

// Components
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { TodoDescriptionComponent } from './todo-description/todo-description.component';
import { TodoviewComponent } from './todoview/todoview.component';



@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    HomeViewComponent,
    TodoDescriptionComponent,
    TodoviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    NgbModule.forRoot(),
    routes
  ],
  providers: [
    ToDoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
