import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'department',
})
export class DepartmentPipe implements PipeTransform {
  transform(workers: { department: number }[], department: number): any[] {
    return workers.filter((worker) => worker.department == department);
  }
}
