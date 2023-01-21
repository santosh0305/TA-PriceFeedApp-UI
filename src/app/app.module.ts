import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AllMaterialModule } from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { UploadComponent } from './components/upload/upload.component';
import { FileUploadService } from './services/file-upload.service';
import { AppRoutingModule } from './AppRoutingModule';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';

@NgModule({
  declarations: [MenuComponent, FooterComponent, SearchComponent, UploadComponent, AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    AllMaterialModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
