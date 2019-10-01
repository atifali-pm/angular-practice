import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {ProjectComponent} from './project/project.component';
import {CategoryComponent} from './category/category.component';
import {TaskComponent} from './task/task.component';
import {AddCategoryComponent} from './category/add-category/add-category.component';
import {AddProjectComponent} from './project/add-project/add-project.component';
import {RouterModule, Routes} from '@angular/router';
import {SingleTaskComponent} from './task/single-task/single-task.component';

const appRoutes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'categories', component: ProjectComponent},
  {path: 'projects', component: ProjectComponent},
  {
    path: 'tasks', component: TaskComponent, children: [
      {path: ':id/:title', component: SingleTaskComponent}
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjectComponent,
    CategoryComponent,
    TaskComponent,
    AddCategoryComponent,
    AddProjectComponent,
    SingleTaskComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
