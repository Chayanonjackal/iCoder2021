import { AddStudentComponent } from './add-student/add-student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'add',component:AddStudentComponent},
  {path:'home',component:HomeComponent},
  {path:'pokemon',component:PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
