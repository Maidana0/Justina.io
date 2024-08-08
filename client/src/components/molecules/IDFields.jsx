import { documentIDValidation } from "../../validations/commonFormValidation"
import Input from "../atoms/Input"
import Select from "../atoms/Select"

const documentsTypes = [
    { value: "DNI", isDefaultChecked: true }, { value: "CI" }, { value: "CIE" }, { value: "CM" },
    { value: "DNM" }, { value: "LC" }, { value: "LE" }, { value: "PAS" }
]


const IDfields = ({ register, error }) => {
    return (
        <div className="form-group">
            <label className="label">
                <span className={`label-text text-poppins text-lg ${error && "text-error"}`}>
                    Tipo y N° de Documento
                </span>
            </label>
            <div className="max-w-[310px] mx-auto">
                <Select
                    register={register("document_type")}
                    options={documentsTypes}
                >
                    <Input
                        width={"auto"}
                        value={36036666}
                        error={error}
                        register={register("document_id", documentIDValidation)}
                        placeholder={"Número de documento"}
                    />
                </Select>
            </div>

            {
                error &&
                <label className="label mx-auto">
                    <span className="label-text-alt leading-5 font-semibold text-error">{error?.message}</span>
                </label>
            }
        </div>
    )
}

export default IDfields