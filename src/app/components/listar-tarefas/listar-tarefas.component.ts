import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/tarefa';
import { TarefaService } from 'src/app/services/tarefa.service';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.scss']
})
export class ListarTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.inicializar();
  }

  listarTodos() : Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  inicializar(){
    this.tarefas = this.listarTodos();
    console.log(this.tarefas);
  }

  remover($event, tarefa: Tarefa){
    $event.preventDefault();
    if(confirm(`Deseja remover a tarefa "${tarefa.nome}" ?`)){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(tarefa: Tarefa){
    if(confirm(`Deseja alterar o status da tarefa "${tarefa.nome}" ?`)){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
