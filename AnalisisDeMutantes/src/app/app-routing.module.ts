import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MutantDetectorComponent } from './mutant-detector/mutant-detector.component';

const routes: Routes = [
  { path: '', component: MutantDetectorComponent },
  // Puedes agregar más rutas aquí según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
