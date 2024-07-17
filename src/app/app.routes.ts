import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/home/home.routes').then(m => m.HomeRoutes)
  },
  
  {
    path: 'character',
    loadChildren: () => import('@pages/character/character.routes').then(m => m.CharacterRoutes)
  },
  {
    path: 'episode',
    loadChildren: () => import('@pages/episode/episode.routes').then(m => m.EpisodeRoutes)
  },
  {
    path: 'location',
    loadChildren: () => import('@pages/location/location.routes').then(m => m.LocationRoutes)
  },
  {
    path: 'contact',
    loadChildren: () => import('@pages/contact/contact.routes').then(m => m.ContactRoutes)
  },
  // {
  //   path: 'project',
  //   loadChildren: () => import('@pages/project/project.routes').then(m => m.ProjectRoutes)
  // },
  // {
  //   path: 'blog',
  //   loadChildren: () => import('@pages/blog/blog.routes').then(m => m.BlogRoutes)
  // },
  // {
  //   path: 'uses',
  //   loadChildren: () => import('@pages/use/use.routes').then(m => m.UseRoutes)
  // },
  {
    path: '**', pathMatch: 'full',
    loadChildren: () => import('@pages/error/error.routes').then(m => m.ErrorRoutes)
  },
]
