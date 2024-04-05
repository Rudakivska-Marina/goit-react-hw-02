import css from './Options.module.css'

function Options({obj, update, reset, total}){

    return (
        <ul className={css.container}>
            {Object.keys(obj).map(el => {
                return <li key={el}><button  className={css.btn} type="button" onClick={() => update(el)}>{el}</button></li>
            })}
           
        </ul>
    )
    }
    
    export default Options