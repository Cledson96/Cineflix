import './Tittle.css'

export default function Tittle ({title, sucesso}) {
    return (
        <>
          <h1>{title}</h1>
          <h2 className='sucesso'>{sucesso}</h2>
        </>
      
    )
}