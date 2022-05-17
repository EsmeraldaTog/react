import React from 'react'

const NoVocals = () => {



     const onKeyDown= (evento) =>{
         console.log('se introdujo una tecla', evento.key);
         const vocales= 'aeiou';
         if(vocales.toLowerCase().search (evento.key) !== -1){
             evento.preventDefault();
         }

         
     }
  return (
    <div>
        <div>No se admiten  vocales</div>
        <input onKeyDown={onKeyDown} type="text" className="bg-green-500"></input>
    </div>

  )
}

export default NoVocals