import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');
 
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
        //console.log( target.value );
    };

    //AL hacer enter
    const onSubmit = ( event ) => {
        event.preventDefault();
        //console.log(inputValue);
        if( inputValue.trim().length < 1 ) return;
        
        //Nueva función:
        onNewCategory( inputValue.trim());

        //Callback donde se asigna nuestro nueva entrada al principio y despues las otras categorias anteriores
        //setCategories( categories => [inputValue, ...categories]);

        //Actualiza el cajon de entrada a vacío
        setInputValue('');
    };

  return (

    <form onSubmit = { onSubmit }>
        <input
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
         />
    </form>
    
  )
}
