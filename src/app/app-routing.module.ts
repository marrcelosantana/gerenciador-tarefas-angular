import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListarTarefasComponent } from "./components/listar-tarefas/listar-tarefas.component";

export const routes: Routes = [
  { path: '', redirectTo: '/listar-tarefas', pathMatch: 'full' },
  { path: 'listar-tarefas', component: ListarTarefasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}


