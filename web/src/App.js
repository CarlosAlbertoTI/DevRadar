import React, { useState, useEffect } from 'react';

import api from './services/api'

import './Global.css'
import './App.css'
import './Main.css'

import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

function App() {

  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data)
    }
    loadDevs()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs,response.data])
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}

        </ul>
      </main>
    </div>
  )
}










//Exemplos

// import React, {useState} from 'react';

// import Header from './Header'

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedades: Informações que um componente Pai passa para o componente Filho
// Estado: Informações mantidas pelo componente (Lembrar: imutabilidade) => {Usar funções auxiliares para não mudar o 
// valor da variavel mas criar uma nova usando o valor da variavel antiga}


// Fragment: consite em criar uma tag HTML porem sem nome, assim não se precisa criar mais divs
// function App() {
//   const [counter, setCounter] = useState(0)

//   function incrementCounter(){
//     setCounter(counter + 1)
//   }


//   return (
//     <>  
//       <h1>Contador: {counter}</h1>
//       <button onClick={incrementCounter}>Incrementar</button>
//     </> 
//   );
// }

export default App;
