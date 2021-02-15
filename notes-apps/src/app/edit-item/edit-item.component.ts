import { Component,  OnInit,Inject } from '@angular/core';
import { BudgetItem } from 'src/shared/modules/budget-item-model';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {


  constructor(
    public dialogref:MatDialogRef<EditItemComponent>,@Inject(MAT_DIALOG_DATA) public item:BudgetItem
  ) { }

  ngOnInit(): void {
  }
onSubmitted(updateditem:BudgetItem){
this.dialogref.close(updateditem);
}

}
