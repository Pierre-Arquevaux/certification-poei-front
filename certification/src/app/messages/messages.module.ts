import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DeleteComponent,
    ShowComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
