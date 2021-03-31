import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workersfilter',
})
export class WorkersfilterPipe implements PipeTransform {
  transform( workers: any[], searchStr: string): any[]{
      if (searchStr === ''){
        return workers;
    } else{
      let filteredItemsName = workers.filter((worker) => (worker.name.toLowerCase().indexOf(searchStr.toLowerCase())&&worker.surname.toLowerCase().indexOf(searchStr.toLowerCase())) !== -1);
      return filteredItemsName ;
      
    }
  }
 

}