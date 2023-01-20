import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  },{
    path: 'upload',
    component: UploadComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}