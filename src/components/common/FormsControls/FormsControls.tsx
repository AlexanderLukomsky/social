import { TextareaHTMLAttributes } from "react"
import { FieldProps, FieldRenderProps } from "react-final-form"
import { defaultStyle } from "./FormControlStyle"

type finalyProps = TextareaHTMLAttributes<{}> & {
    input: FieldProps<string, FieldRenderProps<string, HTMLElement, string>, HTMLElement, string>
    meta: any
}
export const Textarea = ({ meta, ...props }: finalyProps) => {
    const hasError = meta.touched && meta.error
    return (
        <div style={{ ...defaultStyle({ type: 'div' }) }}>
            <textarea style={{ ...defaultStyle({ type: 'textarea', hasError }), resize: 'none' }}
                {...props.input} {...props}
            />
            <div>
                {
                    hasError && <span>{meta.error}</span>
                }
            </div>
        </div>
    )
}

export const FormControl = ({ meta, ...props }: finalyProps) => {
    return (
        <div>

        </div>
    )
}