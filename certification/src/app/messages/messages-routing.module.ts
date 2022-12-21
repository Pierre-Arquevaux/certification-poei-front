import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './components/add/add.component';
<<<<<<< HEAD
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

=======

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
>>>>>>> origin/pierre
      },

      //Ajoute un message (Create)

<<<<<<< HEAD


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

=======
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
>>>>>>> origin/pierre
          },

          //Modifier un livre (Update)

          //> site.com/livres/42/edit

          {
<<<<<<< HEAD

            path: 'edit',

            component: EditComponent,

=======
            path: 'edit',

            component: EditComponent,
>>>>>>> origin/pierre
          },

          // Supprimer un user (Delete)

          // > site.com/user/42/delete

          {
<<<<<<< HEAD

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

=======
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
>>>>>>> origin/pierre
