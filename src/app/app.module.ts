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
import {EditUserComponent} from './users/edit-user/edit-user.component';
import {CategoryService} from './category/category.service';
import {ProjectService} from './project/project.service';
import {TaskService} from './task/task.service';
import {TagsService} from './tags/tags.service';
import {UserService} from './users/user.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {DropdownDirective} from './shared/dropdown.directive';
import {AppRoutingModule} from './app-routing.module';
import {AuthComponent} from './auth/auth.component';
import {LoadingComponent} from './loading/loading.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';

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
    DropdownDirective,
    AuthComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CategoryService, ProjectService, TaskService, TagsService, UserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
