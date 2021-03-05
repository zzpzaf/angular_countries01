import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.css']
})
export class AppInfoComponent implements OnInit {

  


  title: string = 'This is a Countries information Application';
  info: string = '';
  date_created: Date = new Date();


  constructor(private datePipe: DatePipe) { 

  }

  ngOnInit(): void {
    this.myInfo();
  }


  myInfo() {
    //this.info = `${this.title}! Today is: ${this.datePipe.transform(this.date_created, 'EEEE, dd/MM/yyyy')}`;
    this.info = 'Wellcome! Today is: ' + this.myDateFormationStr();
    //this.info = 'Wellcome! Today is: ' + this.date_created;
  }


  myDateFormationStr() : string {
    let retstr = '';
    retstr = this.datePipe.transform(this.date_created, 'EEEE, dd/MM/yyyy')!;
    //retstr = `${this.date_created}`;
    return retstr;
  }



}
