import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';



@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent,
    ShowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
