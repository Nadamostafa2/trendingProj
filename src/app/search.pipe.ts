import { LowerCasePipe } from '@angular/common';
import { isNgTemplate } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(trendingItems:any[],searchTxt:string): any {
    return trendingItems.filter((item)=>{
        if(item.title){
         // console.log(item.title);
        return item.title.includes(searchTxt)
        }else
        return item.name.includes(searchTxt)

      })
  
  }

}
