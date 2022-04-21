import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
trendingMovies:any[]=[];
trendingTvs:any[]=[];

  constructor(private trendingService:TrendingService) { }

  ngOnInit(): void {
  }
   getTrendingItems(){
   this.trendingService.getTrending("all").subscribe((response:any)=>{
    this.trendingMovies=response.results.filter((item:any)=>{
      return item.media_type== "movie";
     

   })
console.log(this.trendingMovies);
  });
  }
}
