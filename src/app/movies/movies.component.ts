import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  trendingMovies: any[] = [];
  constructor(private trendingService:TrendingService) { }

  ngOnInit(): void {
    this.getTrendingMovies();
  }
  getTrendingMovies() {
    this.trendingService.getTrending("movie").subscribe((response: any) => {
      this.trendingMovies = response.results;
    })
  }

}
