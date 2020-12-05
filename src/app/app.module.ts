import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './core-module/header/header.component';
import { FooterComponent } from './core-module/footer/footer.component';
import { CoreModule } from './core-module/core-module.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { PicturesModule } from './pictures/pictures.module';
import { AuthGuard } from './core-module/guards/auth.guard';
import { NgxCloudinaryWidgetModule } from 'ngx-cloudinary-upload-widget';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

  ],
  imports: [
    CoreModule,
    UserModule,
    PicturesModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxCloudinaryWidgetModule.forRoot(
      {
        cloudName: "dido98cloudinary"
      }
    ),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AuthGuard,
    { provide: Window, useValue: window },
  ],
  bootstrap: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
  ]
})
export class AppModule { }
