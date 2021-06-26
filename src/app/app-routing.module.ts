import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'details', component: DetailsComponent },
  { path: '**', redirectTo: 'search' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
