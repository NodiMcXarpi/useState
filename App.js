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

