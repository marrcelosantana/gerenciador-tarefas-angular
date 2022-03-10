import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { TarefaService } from './services/tarefa.service';

import { AppComponent } from './app.component';
import { ListarTarefasComponent } from './components/listar-tarefas/listar-tarefas.component';
import { CadastrarTarefasComponent } from './components/cadastrar-tarefas/cadastrar-tarefas.component';
import { EditarTarefasComponent } from './components/editar-tarefas/editar-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarefasComponent,
    CadastrarTarefasComponent,
    EditarTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  providers: [TarefaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
