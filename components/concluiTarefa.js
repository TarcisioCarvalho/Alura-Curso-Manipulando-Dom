const BotaoConclui = ()=>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'Concluir'
    botaoConclui.addEventListener('click',concluirTarefa);
    return botaoConclui;
}

const concluirTarefa = (e) =>{
    e.preventDefault();
    const botaoConclui = e.target;
    const tarefaCompleta = botaoConclui.parentElement;
    tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui