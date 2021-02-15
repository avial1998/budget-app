import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AdditemformComponent } from './additemform/additemform.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AdditemformComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,MatDialogModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
