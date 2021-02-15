import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { createPublicKey } from 'crypto';
import { BudgetItem } from 'src/shared/modules/budget-item-model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
@Input()item!:BudgetItem;
@Output()xbutton:EventEmitter<any>=new EventEmitter<any>();
@Output()cardclick:EventEmitter<any>=new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
xbuttonclick (){
this.xbutton.emit();

}
oncardclick(){
this.cardclick.emit();
}
}
