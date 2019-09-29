import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {ProjectComponent} from './project/project.component';
import {CategoryComponent} from './category/category.component';
import {TaskComponent} from './task/task.component';
import {RouterModule, Routes} from '@angular/router';
import { AddCategoryComponent } from './category/add-category/add-category.component';

const appRoutes: Routes = [
  {path: 'projects', component: ProjectComponent},
  {path: 'categories', component: CategoryComponent},
  {path: 'tasks', component: TaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    CategoryComponent,
    TaskComponent,
    AddCategoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
