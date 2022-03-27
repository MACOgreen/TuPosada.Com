import React from 'react'
import "./perfilStyle.css"
import Carousel from './carousel2/Carousel'

export default function Perfil() {
  return (
    <div className='info'>
        <h1 className='Tposada'> Nombre de la posada  </h1>
        <Carousel/>
        <h2 className='Tposada'>Descripcion de la posada "Nombre posada"</h2>

        <div className='ParrafoDescrip'>fddjfhdajfjkadfjksdhjkfshfkjdshjfhdsjkfhjkdsfhdhfjkdsfdshjkfhdksfdsfkdfiiiiiiiii
             fdjfkldjfklsjdklfjdlksjfkldsjfjdlsjflkdjfkldjlkfjdlsjfldsjlkfjdskljflkdsjlkfjlds
             dfdflkdjslkfjdslkfjlkdsjflkdjfjldsfdjlfkdjslkfjksdjfjlksjdflkdjsfjdskljfldsjlfjdl
        </div>

        <h2 className='Tposada' >Servicios</h2>

        <div className='ParrafoServ'>fddjfhdajfjkadfjksdhjkfshfkjdshjfhdsjkfhjkdsfhdhfjkdsfdshjkfhdksfdsfkdfiiiiiiiii
             fdjfkldjfklsjdklfjdlksjfkldsjfjdlsjflkdjfkldjlkfjdlsjfldsjlkfjdskljflkdsjlkfjlds
             dfdflkdjslkfjdslkfjlkdsjflkdjfjldsfdjlfkdjslkfjksdjfjlksjdflkdjsfjdskljfldsjlfjdl
        </div>
        
        <h2 className='Tposada' >Habitaciones disponibles</h2>
        <div className="pr">Aqui va la lista de habitaciones disponibles</div>

        <button className='bo'>Realizar reserva</button>
        
    </div>
  )
}




