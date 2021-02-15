import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm} from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/modules/budget-item-model';
@Component({
  selector: 'app-additemform',
  templateUrl: './additemform.component.html',
  styleUrls: ['./additemform.component.scss']
})
export class AdditemformComponent implements OnInit {
  @Input() item:BudgetItem =new BudgetItem('',0);
  @Output() formSubmit:EventEmitter<BudgetItem>=new EventEmitter();
onSubmit(form:NgForm){
 this.formSubmit.emit(form.value);
 form.reset();
}
  constructor() { }

  ngOnInit(): void {
  }

}
