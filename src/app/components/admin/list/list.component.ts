import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() product:{}|any;
  @Output() deleteevents=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }


  delete(){
    this.deleteevents.emit(this.product.id);
  }
}