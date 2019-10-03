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
import {EditTaskComponent} from './task/edit-task/edit-task.component';
import {TagsComponent} from './tags/tags.component';
import {EditTagComponent} from './tags/edit-tag/edit-tag.component';
import {UsersComponent} from './users/users.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

const appRoutes: Routes = [
  {path: '', component: CategoryComponent},
  {path: 'categories', component: ProjectComponent},
  {path: 'projects', component: ProjectComponent},
  {path: 'tasks', component: TaskComponent},
  {path: 'tags', component: TagsComponent},
  {path: 'users', component: UsersComponent}
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
    EditTaskComponent,
    TagsComponent,
    EditTagComponent,
    UsersComponent,
    EditUserComponent,
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
