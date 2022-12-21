import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { ChannelsModule } from '../channels/channels.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ChannelsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
