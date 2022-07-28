import './MovieSelected.css'


export default function MovieSelected({ title, img }) {
    return (
        <div className='MovieSelected'>
            <div>
                <img alt="" src={img} />
            </div>

            <h5 >{title}</h5>
            <h5></h5>
        </div>
    )
}