import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatListModule } from '@angular/material/list';
import { ContentRouterModule, RoutesWithContent } from '@wizdm/content';
import { GtagModule } from '@wizdm/gtag';
import { RedirectModule } from '@wizdm/redirect';
import { ReadmeModule } from '@wizdm/readme';
import { IconModule } from '@wizdm/elements/icon';
import { AvatarModule } from '@wizdm/elements/avatar';
import { MomentPipesModule } from '@wizdm/pipes/moment';
import { AuthGuardModule } from 'app/utils/auth-guard';
import { ValidProfile } from 'app/utils/user';
import { SidenavModule } from 'app/navigator/sidenav';
import { ExploreComponent } from './explore.component';

const routes: RoutesWithContent = [
  {
    path: '',
    content: 'explore',
    component: ExploreComponent,
    canActivate: [ ValidProfile ],
    children: [
      { path: '',       redirectTo: 'people', pathMatch: 'full' },
      { path: 'feed',   loadChildren: () => import('./feed/feed.module').then(m => m.FeedModule) },
      { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) },
      { path: 'feed1', loadChildren: () => import('./feed1/feed1.module').then(m => m.Feed1Module) },
      { path: 'distribution2017', loadChildren: () => import('./distribution2017/distribution2017.module').then(m => m.Distribution2017Module) },
      { path: 'distribution2018', loadChildren: () => import('./distribution2018/distribution2018.module').then(m => m.distribution2018Module) },
      { path: 'distribution2019', loadChildren: () => import('./distribution2019/distribution2019.module').then(m => m.distribution2019Module) },
      { path: 'distribution2020', loadChildren: () => import('./distribution2019/distribution2019.module').then(m => m.distribution2019Module) },
      { path: 'distribution2020', loadChildren: () => import('./distribution2020/distribution2020.module').then(m => m.distribution2020Module) },
      { path: 'distribution2021', loadChildren: () => import('./distribution2021/distribution2021.module').then(m => m.distribution2021Module) },
      { path: 'q12017', loadChildren: () => import('./q12017/q12017.module').then(m => m.q12017Module) },
      { path: 'q12018', loadChildren: () => import('./q12018/q12018.module').then(m => m.q12018Module) },
      { path: 'q12019', loadChildren: () => import('./q12019/q12019.module').then(m => m.q12019Module) },
      { path: 'q12020', loadChildren: () => import('./q12020/q12020.module').then(m => m.q12020Module) },
      { path: 'q12021', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q22017', loadChildren: () => import('./q22017/q22017.module').then(m => m.q22017Module) },
      { path: 'q22018', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q22019', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q22020', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q22021', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q32017', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q32018', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q32019', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q32020', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q42017', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q42018', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q42019', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q42020', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'q42021', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'k12017', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'k12018', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'k12019', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'k12020', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'k12021', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },


      { path: 'newsletterq1', loadChildren: () => import('./newsletterq1/newsletterq1.module').then(m => m.newsletterq1Module) },
      { path: 'newsletterq2', loadChildren: () => import('./newsletterq2/newsletterq2.module').then(m => m.newsletterq2Module) },
      { path: 'newsletterq3', loadChildren: () => import('./newsletterq3/newsletterq3.module').then(m => m.newsletterq3Module) },
      { path: 'newsletterq4', loadChildren: () => import('./newsletterq4/newsletterq4.module').then(m => m.newsletterq4Module) },

      { path: 'capitalcall2017', loadChildren: () => import('./capitalcall2017/capitalcall2017.module').then(m => m.capitalcall2017Module) },
      { path: 'capitalcall2018', loadChildren: () => import('./capitalcall2018/capitalcall2018.module').then(m => m.capitalcall2018Module) },
      { path: 'capitalcall2019', loadChildren: () => import('./capitalcall2019/capitalcall2019.module').then(m => m.capitalcall2019Module) },
      { path: 'capitalcall2020', loadChildren: () => import('./capitalcall2020/capitalcall2020.module').then(m => m.capitalcall2020Module) },
      { path: 'capitalcall2021', loadChildren: () => import('./capitalcall2021/capitalcall2021.module').then(m => m.capitalcall2021Module) },


      { path: 'capitalaccount2017', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'capitalaccount2018', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'capitalaccount2019', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'capitalaccount2020', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },
      { path: 'capitalaccount2021', loadChildren: () => import('./q12021/q12021.module').then(m => m.q12021Module) },





      { path: 'groups', loadChildren: () => import('./groups/groups.module').then(m => m.GroupsModule) }
    ]
  }
];

@NgModule({
  declarations: [ ExploreComponent ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatBadgeModule,
    MatListModule,
    GtagModule,
    RedirectModule,
    ReadmeModule,
    IconModule,
    AvatarModule,
    AuthGuardModule,
    SidenavModule, 
    MomentPipesModule,
    ContentRouterModule.forChild(routes)
  ]
})
export class ExploreModule { }
