import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';





const routes: Routes = [

  {

    path: 'messages',

    children: [

      {

        path: '',

        component: ListComponent,

      },

      //Ajoute un message (Create)



      {

        path: 'add',

        component: AddComponent,

      },



      {

        path: ':id',

        children: [

          //Affiche un message (Read)

          {

            path: '',

            component: ShowComponent,

          },

          //Modifier un livre (Update)

          //> site.com/livres/42/edit

          {

            path: 'edit',

            component: EditComponent,

          },

          // Supprimer un user (Delete)

          // > site.com/user/42/delete

          {

            path: 'delete',

            component: DeleteComponent,

          },

        ],

      },

    ],

  },

];



@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule],

})

export class MessagesRoutingModule {}

