const BotaoDeleta = () =>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'Deletar';
    botaoDeleta.addEventListener('click',deletarTarefa);
    return botaoDeleta;
}
const deletarTarefa = (e) =>{
    const botaoDeleta = e.target;
    const tarefaDeletada = botaoDeleta.parentElement;
    tarefaDeletada.remove();
}

export default BotaoDeleta