import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from './category/category.component';
import {ProjectComponent} from './project/project.component';
import {TaskComponent} from './task/task.component';
import {TagsComponent} from './tags/tags.component';
import {UsersComponent} from './users/users.component';
import {AddCategoryComponent} from './category/add-category/add-category.component';
import {AddProjectComponent} from './project/add-project/add-project.component';
import {EditTaskComponent} from './task/edit-task/edit-task.component';
import {EditTagComponent} from './tags/edit-tag/edit-tag.component';
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {AuthComponent} from './auth/auth.component';
import {AuthGuard} from "./auth/auth.guard";

const appRoutes: Routes = [
  {path: '', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'auth', component: AuthComponent},
  {
    path: 'categories', component: CategoryComponent, canActivate: [AuthGuard], children: [
      {path: ':id/edit', component: AddCategoryComponent}
    ]
  },
  {
    path: 'projects', component: ProjectComponent, canActivate: [AuthGuard], children: [
      {path: ':id/edit', component: AddProjectComponent}
    ]
  },
  {
    path: 'tasks', component: TaskComponent, canActivate: [AuthGuard], children: [
      {path: ':id/edit', component: EditTaskComponent}
    ]
  },
  {
    path: 'tags', component: TagsComponent, canActivate: [AuthGuard], children: [
      {path: ':id/edit', component: EditTagComponent}
    ]
  },
  {
    path: 'users', component: UsersComponent, canActivate: [AuthGuard], children: [
      {path: ':id/edit', component: EditUserComponent}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
