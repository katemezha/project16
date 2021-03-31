import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyWorker } from '../models/department.model';
import { WorkersDatabase } from '../services/workers.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  department: number = 0;
  workers: MyWorker[] = [];
  sortType: string = 'аscendingId';
  instruments: boolean = false;
  searchStr: string = '';
  constructor(
    private activatedRouter: ActivatedRoute,
    private workersDatabase: WorkersDatabase
  ) {
    this.activatedRouter.params.subscribe((param) => {
      this.department = param.department;
    });
  }
  ngOnInit(): void {
    this.getData();
  }
  currentInstrument() {
    let c;
    switch (this.sortType) {
      case 'аscendingId':
        c = 'по возрастанию id';
        break;
      case 'descendingId':
        c = 'по убыванию id';
        break;
      case 'аscendingAge':
        c = 'по возрастанию возраста';
        break;
      case 'descendingAge':
        c = 'по убыванию возраста';
        break;
    }
    return c;
  }
  getAge(date: string) {
    let a = new Date(date);
    let b = new Date();
    let date_diff = b.getTime() - a.getTime();
    let age = Math.floor(date_diff / 1000 / 60 / 60 / 24 / 365);
    return age;
  }
  deleteThisWorker(id: number) {
    this.deleteWorker(id);
    this.getData();
    this.getData();
  }
  editThisWorker(worker: MyWorker) {
    if (worker.edit) {
      worker.edit = false;
      this.editWorker(worker.id, worker);
      this.getData();
      this.getData();
    } else {
      worker.edit = true;
    }
  }
  async getData() {
    try {
      this.workers = await this.workersDatabase.getAll();
    } catch (err) {
      console.log(err);
    }
  }
  async deleteWorker(id: number) {
    try {
      await this.workersDatabase.deleteOneById(id);
    } catch (err) {
      console.log(err);
    }
  }

  async editWorker(id: number, worker: MyWorker) {
    try {
      await this.workersDatabase.putOneById(id, worker);
    } catch (err) {
      console.log(err);
    }
  }
}
