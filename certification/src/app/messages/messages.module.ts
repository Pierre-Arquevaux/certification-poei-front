import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesRoutingModule } from './messages-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    ShowComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MessagesRoutingModule,
  ]
})
export class MessagesModule { }
