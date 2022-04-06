import BotaoConclui from "./components/concluiTarefa.js";
import BotaoDeleta from "./components/deletaTarefa.js";

(()=>{
    const criarTarefa = (e) => {
        const input = document.querySelector('[data-form-input]');
        e.preventDefault(); 
        console.log(input.value);
        
    
       const lista = document.querySelector('[data-list]');
       const tarefa  = document.createElement('li');
       tarefa.classList.add('task')
       const conteudo = `<p class="content">${input.value}</p>`;
       tarefa.innerHTML = conteudo;
       tarefa.appendChild(BotaoConclui());
       tarefa.appendChild(BotaoDeleta());
       lista.appendChild(tarefa);
       input.value='';
    }
    
    const novaTarefa = document.querySelector('[data-form-button]');
    
    novaTarefa.addEventListener('click', criarTarefa);
    
    
    

  
})()