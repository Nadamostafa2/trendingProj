import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPersons:any[]=[];

  constructor(private trendingService:TrendingService) { }

  ngOnInit(): void {
     this.getTrendingPersons();
  }
  getTrendingPersons() {
    this.trendingService.getTrending("person").subscribe((response: any) => {
      console.log(response);
      this.trendingPersons = response.results.filter((data:any)=>{
        return data.profile_path != null;
      });
      
    })
    
  }

}
