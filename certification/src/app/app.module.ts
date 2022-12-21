import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD
import { ChannelsModule } from './channels/channels.module';
=======
>>>>>>> origin/pierre
import { MessagesModule } from './messages/messages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    MessagesModule,
    UsersModule,
<<<<<<< HEAD
    ChannelsModule,
    MessagesModule,
=======
>>>>>>> origin/pierre
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
