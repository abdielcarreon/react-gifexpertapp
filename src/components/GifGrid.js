import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {
  
  const { data:images, loading } = useFetchGifs( category );


  return (
    <>
        <h3 className="animate__animated animate__fadeIn"> { category } </h3>

        { loading && <p className="animate__animated animate__flash">Loading</p> }

        <div className="card-grid">
            
            {
                images.map( img => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img }
                    />
                ))
            }
        
        </div>
    </>
)
}
// const [images, setImages] = useState([]);


//   useEffect( () => {
//     getGifs();
//   }, [] )

//   const getGifs = async () => {

//     const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=vrx5ODsbenExeIbI0E24dpyfxvMhBke9';
//     const resp = await fetch( url );
//     const { data } = await resp.json();

//     const gifs = data.map( img => {
//       return {
//         id: img.id,
//         title: img.title,
//         url: img.images?.downsized_medium.url
//       }
//     })


//     console.log(gifs);
//     setImages( gifs );

//   }

//   // getGifs();

//   return (
//     <div>
//       <h3> { category } </h3>
//       <ol>

//         {

//           images.map ( ({ id, title}) => (
//             <li key={ id }> { title }</li>
//           ))

          

//         }

//       </ol>
//     </div>
//   )

// }