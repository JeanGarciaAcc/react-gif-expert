import { useEffect, useState } from "react";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages( newImages );
    // }

    // useEffect( () => {
    //     getImages();
    // }, [] )

  return (
    <>
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando...</h2> )//Si isLoading = true, ejecuta la siguiente instrucción
        }
        {/* {
            isLoading
            ? ( <h2>Cargando...</h2> )
            : null
        } */}
        <div className="card-grid">
            {
                images.map( ( image ) => (
                    <GifItem 
                        key={ image.id } 
                        { ...image }
                    //Esparcir las properties ...image. Es decir todas las propiedades que vengan en image las estoy esparciendo, cuando un objeto tiene muchas propiedades
                    />
                ))
            }
        </div>
    </>
  )
}
