import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BudgetItem } from 'src/shared/modules/budget-item-model';
import { EditItemComponent } from '../edit-item/edit-item.component';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
@Input() budgetitems!:BudgetItem[];
@Output() delete:EventEmitter<BudgetItem>=new EventEmitter<BudgetItem>();
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
ondelete(item:BudgetItem){
this.delete.emit(item);
}
oncardclicked(item:BudgetItem){
const dialogRef=this.dialog.open(EditItemComponent,{
  width:'580px',
  data:item 
});
dialogRef.afterClosed().subscribe(result=>{
  if(result){
    this.budgetitems[this.budgetitems.indexOf(item)]=result;
  }
})
}
}
