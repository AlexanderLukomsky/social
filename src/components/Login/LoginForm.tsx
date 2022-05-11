import { Form, Field } from 'react-final-form'
type FormDataType = {
    login: string, password: string, rememberMe: boolean
}
type PropsType<T> = {
    onSubmit: (formData: T) => void
}
export const LoginForm = ({
    onSubmit, ...props
}: PropsType<FormDataType>) => {
    const required = (value: any) => (value ? undefined : 'Required')
    return (
        <Form onSubmit={onSubmit} >
            {({ handleSubmit, submitting, form, pristine }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <Field name="login" validate={required}>
                                {({ input, meta }) => (
                                    <li>
                                        <input {...input} type="text" placeholder="login" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </li>
                                )}
                            </Field>
                            <Field name="password" validate={required}>
                                {({ input, meta }) => (
                                    <li>
                                        <input {...input} type="text" placeholder="password" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </li>
                                )}
                            </Field>
                            <Field name="rememberMe" type="checkbox">
                                {({ input }) => (
                                    <li>
                                        <input {...input} type="checkbox" /> remember
                                    </li>
                                )}
                            </Field>
                            <li>
                                <button type='submit'>

                                    login
                                </button>
                                <br />
                                <br />
                                <br />
                                <br />
                                <button
                                    type="button"
                                    onClick={() => {
                                        form.reset()
                                        console.log('object');
                                    }}
                                    disabled={submitting || pristine}
                                >
                                    {submitting || pristine ? 'true' : 'false'}
                                </button>
                            </li>
                        </ul>
                    </form >
                )
            }}
        </Form>
    )
}