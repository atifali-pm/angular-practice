import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import {User} from './user.model';

export interface AuthResponseInterface {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  signup(email: string, password: string) {
    const post = {
      email,
      password,
      returnSecureToken: true,
    };

    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    return this.http.post<AuthResponseInterface>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCx2I2D9qsKIJTmv4vf9mupmIFaiJEL1Y8', post)
      .pipe(
        catchError(this.handleError),
        tap(responseData => {
          this.handleAuth(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
        })
      );
  }

  login(email: string, password: string) {
    const post = {
      email,
      password,
      returnSecureToken: true,
    };

    return this.http.post<AuthResponseInterface>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCx2I2D9qsKIJTmv4vf9mupmIFaiJEL1Y8', post
    )
      .pipe(
        catchError(this.handleError),
        tap(responseData => {
          this.handleAuth(responseData.email, responseData.localId, responseData.idToken, +responseData.expiresIn);
        })
      );
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured!';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email is already exist!';
        break;

      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Operation not allowed!';
        break;

      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage = 'Too many attempts try later';
        break;

      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Email not found!';
        break;

      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password!';
        break;

      case 'USER_DISABLED':
        errorMessage = 'User disabled!';
        break;
    }

    return throwError(errorMessage);

  }

}
