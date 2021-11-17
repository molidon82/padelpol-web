import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app-routes';
import { authRoutes } from './auth/auth-routes';
import { IsAuthenticatedGuard } from './core/guards/is-authenticated.guard';

const routes: Routes = [
  { path: appRoutes.authModule, loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: appRoutes.gamesModule, loadChildren: () => import('./games/games.module').then(m => m.GamesModule), canActivate: [IsAuthenticatedGuard] },
  { path: '**',  redirectTo: `/${appRoutes.authModule}/${authRoutes.loginPage}`, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
