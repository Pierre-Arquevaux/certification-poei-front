import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { DeleteComponent } from './components/delete/delete.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ]
})
export class ChannelsModule { }
