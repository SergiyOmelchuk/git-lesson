import React from "react";
import s from "./FormsControls.module.css";
import {Field} from "redux-form";
import {required} from "../../../utils/validators";


export const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {children}
            </div>
            <div>
                {hasError && error}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /> </FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /> </FormControl>
}

// ниже то что было до деструктуризации


// export const Textarea = ({input, meta: {touched, error}, ...props}) => {
//     const hasError = touched && error;
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : "")}>
//             <div>
//                 <textarea {...input}{...props}/>
//             </div>
//             <div>
//                 {hasError && error}
//             </div>
//         </div>
//     )
// }
// export const Input = ({input, meta: {touched, error}, ...props}) => {
//     const hasError = touched && error;
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : "")}>
//             <div>
//                 <input {...input}{...props}/>
//             </div>
//             <div>
//                 {hasError && error}
//             </div>
//         </div>
//     )
// }
export const createField = (placeholder, name, validate, component, text = "", props = {}) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} validate={validate} component={component} {...props}/>{text}
        </div>
    )
}