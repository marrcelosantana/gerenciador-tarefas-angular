import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CadastrarTarefasComponent } from "./components/cadastrar-tarefas/cadastrar-tarefas.component";
import { EditarTarefasComponent } from "./components/editar-tarefas/editar-tarefas.component";
import { ListarTarefasComponent } from "./components/listar-tarefas/listar-tarefas.component";

export const routes: Routes = [
  { path: '', redirectTo: '/listar-tarefas', pathMatch: 'full' },
  { path: 'listar-tarefas', component: ListarTarefasComponent },
  { path: 'cadastrar-tarefas', component: CadastrarTarefasComponent },
  { path: 'editar-tarefas/:id', component: EditarTarefasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}


