import { useState, useEffect, useRef } from 'react'
import { React } from 'react'
import lixeira from "./assets/img/lixo.png"

import './index.css'

function CardFazendo (){
    
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {document.title = `Voce tem ${todos.length} tarefas`;}, [todos])

    const addTodo = (e) => {
        e.preventDefault();
        if(input.trim()){ /* o trim retira os espacos brancos */
        setTodos([...todos, input]); /* ...todos pega todo o conteudo que ja estava na lista */
        setInput("");
        console.log(todos);
        }
    }

    const removeTodo = (index) => { /* index recebe o parametro que foi passado pelo botao X */
        // const newTodos = todos.filter((_, i) => { i !== index});
        // setTodos(...todos, newTodos);
        const newTodos = todos.splice(index, 1);
        setTodos(newTodos); 
    }
    function apareceForm(){
        document.getElementsByClassName('butForm')[2].addEventListener("click", (event) => {
            // highlight the mouseover target
            let form = document.getElementsByClassName('formArea')
            form[2].style.visibility = "visible";
            form[2].style.transition = "all 0.6s";
        });
    }

    function escondeForm(){
        document.getElementsByClassName('botaoCinza')[2].addEventListener("click", (event) => {
            // highlight the mouseover target
            let form = document.getElementsByClassName('formArea')
            form[2].style.visibility = "hidden";
            form[2].style.transition = "all 0.2s";
        });
    }


    return(
        <>
        <section>
        <h1>Fazendo</h1>
        <button onClick={apareceForm} className="butForm">Clique para adicionar um cartão</button>
        <form action="" onSubmit={addTodo} className="formArea">
            <input type="textarea" placeholder='Adicione uma tarefa' value={input}
            onChange={(e) => {setInput(e.target.value); console.log(input)}}/>
            <div className='botoesacoes'>
            <button type="submit" className='botaoAzul'>Adicionar tarefa</button>
            <button onClick={escondeForm} className='botaoCinza'>Cancelar</button>
            </div>

        </form>
        <ul>{todos.map((todo, index) => ( /* no html precisamos usar map para que haja um retorno */
            <li key={index}>
            <div className='descricaotarefa'><p>{todo}</p></div>
            <div className='botaotarefa' onClick={() => removeTodo(index)}>
            <button className='botaolixeira'>
            <img src={lixeira} alt="Remover tarefa" className='lixeira'></img>
            </button>
            </div>
            </li>
        ))  }</ul> 
        </section>
        </>
    )

}

export default CardFazendo