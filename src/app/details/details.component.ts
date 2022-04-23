import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
type:any;
id:any;
itemDetails:any;
  constructor(private _ActivatedRoute:ActivatedRoute,private _TrendingService:TrendingService) {
    this.type=_ActivatedRoute.snapshot.paramMap.get("type");
    this.id=_ActivatedRoute.snapshot.paramMap.get("id");
    this._TrendingService.getTrendingDetails(this.type,this.id).subscribe((data)=>{
      this.itemDetails=data;
      console.log(this.itemDetails);

    })
   }

  ngOnInit(): void {
  }

}
