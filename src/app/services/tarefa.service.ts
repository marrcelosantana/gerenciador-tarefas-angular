import { Injectable } from '@angular/core';
import { Tarefa } from '../models/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa) {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find((tarefa) => tarefa.id === id);
  }

  atualizar(tarefa: Tarefa) {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((item, index, listaDeItens) => {
      if(tarefa.id === item.id){
        listaDeItens[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number){
    let tarefas: Tarefa [] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number){
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((item, index, listaDeItens) => {
      if(id === item.id){
        listaDeItens[index].concluida = !item.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }
}
