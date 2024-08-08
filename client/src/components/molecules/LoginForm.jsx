import { defaultRequireValidation, passwordValidation } from '../../validations/commonFormValidation';
import { Link } from 'wouter';
import PasswordInput from '../atoms/PasswordInput';
import SubmitButton from '../atoms/SubmitButton';
import IDfields from './IDFields';
import Select from '../atoms/Select';
import roles from '../../data/roles';
import Input from '../atoms/Input';

const LoginForm = ({ register, watch, messageErrors, onSubmit, errors }) => {
    return (<>
        <form className="flex flex-col gap-3">
            <div className="bg-[#AA80C9] bg-opacity-20 p-5 rounded-2xl login-shadow my-5">
                <Select
                    label={"Iniciar como:"}
                    register={register("role")}
                    options={roles}
                />
                {
                    watch("role") == roles[1].value
                        ?
                        <Input
                            register={register("doctorValidation", defaultRequireValidation)}
                            error={errors.doctorValidation}
                            label={"N° de matricula*"}
                            placeholder={"N° de matricula"}
                            value={31031666}
                        />
                        :
                        <IDfields
                            register={register}
                            error={errors.document_id}
                        />
                }


                <PasswordInput
                    register={register("password", passwordValidation)}
                    error={errors.password}
                    label="Contraseña"
                    value={"userTest#"}
                    placeholder="Contraseña"
                    password
                />

                <div className="text-center mt-2">
                    <Link href="/auth/recuperar-cuenta" className={"link no-underline hover:underline text-magenta"}>
                        ¿Has olvidado tu contraseña?
                    </Link>
                </div>

                {
                    messageErrors.length > 0 &&
                    <ul className={`${messageErrors.length > 1 ? "list-decimal" : ""} text-md w-fit px-2 mx-auto text-center my-2`}>
                        {
                            messageErrors.map((error, index) => (
                                <li key={index} className="text-error p-1 font-semibold">
                                    {error.message}.
                                </li>
                            ))
                        }
                    </ul>
                }
            </div>
            <SubmitButton
                onClick={onSubmit}>
                ingresar
            </SubmitButton>
        </form>
    </>

    )
}

export default LoginForm