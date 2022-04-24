import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  trendingTvs: any[] = [];
  constructor(private trendingService:TrendingService) { }

  ngOnInit(): void {
    this.getTrendingTvs();
  }
  getTrendingTvs() {
    this.trendingService.getTrending("tv").subscribe((response: any) => {
      this.trendingTvs = response.results;
    })
  }

}
