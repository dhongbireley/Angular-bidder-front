import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: MainComponent,
  children: [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'list', component: ListComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
