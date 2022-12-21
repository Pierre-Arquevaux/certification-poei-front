import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  {
    path: 'channels',
    children: [
      {
        path: '',
        component: ListComponent,
      },

      //Ajoute un channel (Create)

      {
        path: 'add',

        component: AddComponent,
      },

      {
        path: ':id',

        children: [
          //Affiche un channel (Read)

          {
            path: '',
            component: ShowComponent,
          },

          //Modifier un channel (Update)

          //> site.com/channel/42/edit

          {
            path: 'edit',

            component: EditComponent,
          },

          // Supprimer un channel (Delete)

          // > site.com/channel/42/delete

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
export class ChannelsRoutingModule {}
