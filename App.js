import React, {useState} from 'react'
import './App.css';

export default function App() {
  const [num, setNum]=useState(10)
  const [oxe, setOxe]=useState('vish')
  const [sd9, setSd9]=useState('Ela quer mi da di quatu')
  const [baseado, setPica]=useState('ela acende o baseaduuu')
  const [number, setNumber]=useState(10)
  const oxente=()=>{
    console.log('oxi mainha')
  }
 
  return (
   <>
   <p>{number}</p>
   <button onClick={()=>setNumber(number + 15)}>Soma 10</button>
    <h1>{sd9}</h1>
    <button onClick={()=>setSd9('eu quero ela por cimaaaaa')}>Por cimAAAaaaAAA</button>
   <p>Valor do state num: {num}</p>
   <h2>{baseado}</h2>
   <button onClick={()=>setPica('eu empurru a minha pica')}>baseado</button>
   <p><button onClick={()=>setNum('oxente') + oxente()}>oxente button</button></p>
   <p>Paulistano q se acha brabo disse: {oxe}</p>
   <button onClick={()=>setOxe('oxi mainha')}>baianoTalks</button>

   
  
   </>
  );
}

O mesmo método também pode ser aplicado em strings, com o mesmo padrão de code, ex:

import React, {useState} from 'react'
import './App.css';
import Clock from './clock'



export default function App() {
  const [num, setNum]=useState(10)
  const [cincao, setCincaum]=useState(5)
  const [impact, doMeuSaco]=useState('É o impacto do meu saco')
  const [igreja, favela]=useState('to vendo a igreja da penha')

  return (
   <>
   <p>{impact}</p>
   <button onClick={()=>doMeuSaco(impact + ' batendo na bunda dela')}>impacto</button>
 <p>{igreja}</p>
 <button onClick={()=>favela(igreja + ' bem do alto da favela, com a mais cachorra da favela')}>c quem?</button>
 <h1><Clock/></h1>
  <p>{new Date().toLocaleTimeString()}</p>
   <p>{cincao}</p>
   <button onClick={()=>setCincaum(cincao + 5)}>Toma cincaum</button>


   
   </>
  );
}

