import { useState } from "react"
import Input from "./Input";
import ViewPassword from "./ViewPassword";
import helper from "../../assets/input/helper.svg"

const helperText = `
La contraseña debe tener al menos 8 caracteres, incluyendo una letra mayúscula, una letra minúscula y un carácter especial (@, $, !, %, *, ?, &). No se permiten tres caracteres iguales consecutivos.
`
const LabelForInput = ({ label }) => (
    <div className="flex justify-between items-center">
        <span>{label}</span>
        <div className="tooltip tooltip-secondary tooltip-left" data-tip={helperText}>
            <img width={24} height={24} src={helper} alt="password-helper" />
        </div>
    </div>
)

const PasswordInput = ({ label, value, placeholder, register, error }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [passwordType, setPasswordType] = useState("password");

    const handleClick = (e) => {
        e.preventDefault()
        setIsPasswordVisible(!isPasswordVisible)
        setPasswordType(isPasswordVisible ? "password" : "text")
    }

    return (<>
        <div >
            <Input
                label={<LabelForInput label={label} />}
                placeholder={placeholder}
                password
                value={value}
                passwordType={passwordType}
                register={register}
                error={error}
                viewPassword={
                    <ViewPassword
                        isPasswordVisible={isPasswordVisible}
                        handleClick={handleClick}
                    />}
            />
        </div>
    </>
    )
}

export default PasswordInput