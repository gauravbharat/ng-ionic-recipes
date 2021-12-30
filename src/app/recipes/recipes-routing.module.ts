import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesPage } from './recipes.page';

const routes: Routes = [
  {
    path: '',
    component: RecipesPage,
  },
  {
    path: 'recipe-detail/:recipeId',
    loadChildren: () =>
      import('./recipe-detail/recipe-detail.module').then(
        (m) => m.RecipeDetailPageModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesPageRoutingModule {}
