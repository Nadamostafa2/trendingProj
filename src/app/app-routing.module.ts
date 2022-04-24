import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { AuthGuardService } from './auth-guard.service';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[AuthGuardService]},

  {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path:'about',component:AboutComponent},
  {path:'movies',component:MoviesComponent,canActivate:[AuthGuardService]},
  {path:'tvShows',component:TvShowsComponent,canActivate:[AuthGuardService]},
  {path:'details/:type/:id',component:DetailsComponent,canActivate:[AuthGuardService]},

  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'people',component:PeopleComponent,canActivate:[AuthGuardService]},
  {path:'**',component:NotFoundComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
