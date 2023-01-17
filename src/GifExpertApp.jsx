import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'CR7' ]);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory) ) return;

        setCategories([ newCategory, ...categories ]);
        //console.log(newCategory);
        //setCategories(cat => [...categories, 'Fifa'])
        //'...' indica la desestructuración de las categorías
    };

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input     setCategories se convierte enuna Propiedad del componente AddCategory */ }
        <AddCategory 
        // setCategories={ setCategories }
        onNewCategory = { (value) => onAddCategory(value) } 
        />

        {/* Listado de Gifs (Items) */}
        

        {/* <button onClick={ handleSubstract }> -1 </button> */}

        {
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category }
                    category={ category }/>
            ))
        }
        

            {/* GifItem */}

    </>
  )
}
