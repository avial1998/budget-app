import { Component, OnInit } from '@angular/core';
import { BudgetItem } from 'src/shared/modules/budget-item-model';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
budgetitems:BudgetItem[]=new Array<BudgetItem>();
 public totalbudget:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  additem(newitem:BudgetItem){
this.budgetitems.push(newitem);
this.totalbudget+=newitem.amount;
  }
  deleteitem(item:BudgetItem){
    let index=this.budgetitems.indexOf(item);
    this.budgetitems.splice(index,1);
    this.totalbudget-=newitem.amount;
  }
  
  
}
