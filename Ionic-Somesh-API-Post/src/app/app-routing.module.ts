import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  {
    path: 'post',
    children: [
      {
        path: '',
        loadChildren: () => import('./post/post.module').then(m => m.PostPageModule)
      },
      {
        path: 'post-details',
        loadChildren: () => import('./post/post-details/post-details.module').then(m => m.PostDetailsPageModule)
        
      }
    ]
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
