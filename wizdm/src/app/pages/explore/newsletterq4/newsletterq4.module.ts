import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '@wizdm/elements/icon';
import { ButtonChangerModule } from '@wizdm/elements/button';
import { GtagModule } from '@wizdm/gtag';
import { ActionbarModule } from 'app/navigator/actionbar';
import { ContentRouterModule, RoutesWithContent, ContentModule } from '@wizdm/content';
import { PostModule } from 'app/pages/explore/feed/post/post.module';
import { newsletterq4Component } from './newsletterq4.component';
import { FabModule } from 'app/navigator/fab/fab.module';
import { DialogLoader } from 'app/dialogs';


const routes: RoutesWithContent = [
  {
    path: '',
    component: newsletterq4Component,
    content: 'explore-feed',
    children: [
      { path: 'postdlg', loadChildren: () => import('../../../dialogs/post/post-dlg.module').then(m => m.PostModule), canActivate: [DialogLoader] },

    ]
  }
];

@NgModule({
  declarations: [ newsletterq4Component],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    IconModule,
    ButtonChangerModule,
    GtagModule,
    ActionbarModule,
    PostModule,
    FabModule,

    ContentRouterModule.forChild(routes)
  ],
  providers: []
})
export class newsletterq4Module { }
