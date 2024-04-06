import css from './Feedback.module.css'

function Feedback({value, obj, total}){

    function positiveMaker(){
        let number = 0;
        if(value.good>0){
        number = Math.round((value.good/total) * 100)
        }
        return number
    }

    return (
        <ul className={css.container}>
            {Object.keys(obj).map(el => {
                return <li key={el} className={css.item}><p className={css.text}>{el}</p><span className={css.span}>{value[el]}</span></li>
            })}
            <li className={css.item}><p className={css.text}>total</p><span className={css.span}>{total}</span></li>
            <li className={css.item}><p className={css.text}>positive</p><span className={css.span}>{positiveMaker()}%</span></li>
        </ul>
    )
}


export default Feedback