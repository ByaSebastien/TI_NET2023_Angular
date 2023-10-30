import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Demo01Component } from './demo/demo01/demo01.component';
import { DemoModule } from './demo/demo.module';

//Declaration du routing de base de l'application
const routes: Routes = [
  //Objet avec 2 props
  //Routes est plus compliqué que ca mais si on devait faire une classe c# pour cet exemple ca serait celle ci
  // public class Route{

  //   public string path{get;set;}
  //   public Compenent compenent{get;set;}
  // }
  { path: "", redirectTo: "home", pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  // Chargement des enfant de demo.module au demarage de l'application
  // {
  //   path: "demo", children: [
  //     { path: 'demo01', component: Demo01Component }
  //   ]
  // }
  // Chargement des enfant de demo.module avec lazy loading
  { path: "demo", loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: "exo", loadChildren: () => import('./exo/exo.module').then(m => m.ExoModule) },
  { path: "**", redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
