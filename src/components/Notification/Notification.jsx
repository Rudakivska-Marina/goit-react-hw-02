import css from './Notofication.module.css'

function Notification({text}){
    return (
        <p className={css.text}>{text}</p>
    )
}

export default Notification