import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuario: any = {};

  constructor(public auth: AngularFireAuth) 
  { 
    this.auth.authState.subscribe(user =>
      {
        if (user)
        {
          this.usuario.nombre = user.displayName;
          this.usuario.uid = user.uid;
        }
      })
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.usuario = {};
    this.auth.signOut();
  }

}
