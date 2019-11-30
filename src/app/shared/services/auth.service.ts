import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { UserI } from 'src/app/components/shared/models/use.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) { 
    this.userData = afAuth.authState
  }

  loginByEmail(user: UserI){
    const {email, password} = user
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }
  logout(){
    this.afAuth.auth.signOut()
  }
}
