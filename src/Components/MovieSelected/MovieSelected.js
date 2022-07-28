import './MovieSelected.css'


export default function MovieSelected({ title, img, horario, dia }) {
    return (
        <div className='MovieSelected'>
            <div className='logo'>
                <img alt="" src={img} />
            </div>
            <div className='date'>
                <h5 >{title}</h5>
                <h5>{dia}  {horario}</h5>

            </div>


        </div>
    )
}