// imports de @angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// imports components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFilmComponent } from './components/create-film/create-film.component';
import { ListFilmComponent } from './components/list-film/list-film.component';
import { UpdateFilmComponent } from './components/update-film/update-film.component';
import { DialogoComponent } from './components/dialogo/dialogo.component';

// imports firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

// imports material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';


var firebaseConfig = {
  apiKey: "AIzaSyAgUxVR6G1OVC7rKXuOXwz697VSEJCzQOw",
  authDomain: "rentalshopjacaranda.firebaseapp.com",
  databaseURL: "https://rentalshopjacaranda-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rentalshopjacaranda",
  storageBucket: "rentalshopjacaranda.appspot.com",
  messagingSenderId: "601606257113",
  appId: "1:601606257113:web:6ea1d6ed83e238595841c8"
};

@NgModule({
  declarations: [
    AppComponent,
    CreateFilmComponent,
    ListFilmComponent,
    UpdateFilmComponent,
    DialogoComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
