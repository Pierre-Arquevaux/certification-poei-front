import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD

import { MessagesRoutingModule } from './messages-routing.module';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
=======
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { ShowComponent } from './components/show/show.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesRoutingModule } from './messages-routing.module';
>>>>>>> origin/pierre


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
<<<<<<< HEAD
    DeleteComponent,
    ShowComponent,
    EditComponent
=======
    ShowComponent,
    EditComponent,
    DeleteComponent
>>>>>>> origin/pierre
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    MessagesRoutingModule
=======
    MessagesRoutingModule,
>>>>>>> origin/pierre
  ]
})
export class MessagesModule { }
