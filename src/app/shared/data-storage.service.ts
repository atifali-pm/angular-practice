import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoryService} from '../category/category.service';
import {Category} from '../category/category';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private cService: CategoryService, private authService: AuthService) {
  }

  saveData() {
    this.http.put('https://angular-practice-c7442.firebaseio.com/categories.json', this.cService.getCategories()).subscribe(response => {
      console.log(response);
    });
  }

  fetchData() {
    this.http.get<Category[]>('https://angular-practice-c7442.firebaseio.com/categories.json').subscribe(categories => {
      this.cService.setCategories(categories);
    });
  }
}
