import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PeopleComponent } from './people/people.component';
import { NotFoundComponent } from './not-found/not-found.component';
import{HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { OverviewPipe } from './overview.pipe';
import { SearchPipe } from './search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    TvShowsComponent,
    LoginComponent,
    RegisterComponent,
    PeopleComponent,
    NotFoundComponent,
    DetailsComponent,
    OverviewPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
