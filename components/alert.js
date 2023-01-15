import {clsx} from "clsx";
import style from './alert.module.css'

export default function Alert({children, type}) {
    return (
        <div className={clsx({
            [style.success]: type === 'success',
            [style.error]: type === 'error'
        })}>
            {children}
        </div>
    )
}