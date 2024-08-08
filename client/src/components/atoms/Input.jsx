
const Input = ({ label, placeholder, password, register, error, width, viewPassword, passwordType, typeInput, isDisabled, watch, value, inputName }) => {
  const originalValue = watch ? watch(inputName, value ?? "") : value ?? "";

  return (
    <div className="form-control">
      {
        label &&
        <label className="label">
          <div className={`label-text text-poppins text-lg ${error && "text-error"} w-full`}>
            {label}
          </div>
        </label>
      }

      <div style={{ width: width ?? "310px" }} className={`px-2.5 focus-within:bg-fullWhite hover:bg-fullWhite bg-gray input mx-auto
      backdrop-blur-sm rounded rounded-b-none shadow-sm  content-center 
      ${error ? "border-error" : "border-x-0 border-t-0  border-magenta"} 
      ${error ? "shadow-error" : "shadow-magenta"}
      ${error ? "input-error" : "input-secondary"}
      ${password && "flex items-center"}
      ${isDisabled && "is-input-disabled"}
      `}
      >
        {
          watch ? <input
            disabled={isDisabled}
            value={originalValue}
            autoComplete="off"
            type={password ? passwordType : typeInput ?? "text"}
            {...register}
            placeholder={placeholder}
            className={"w-full text-ellipsis overflow-hidden "}
          />
            : <input
              value={value ?? ""}
              autoComplete="off"
              type={password ? passwordType : typeInput ?? "text"}
              {...register}
              placeholder={placeholder}
              className={"w-full text-ellipsis overflow-hidden "}
            />
        }
        {password && viewPassword}
      </div>

      {password &&
        <span className="label-text-alt text-textColor p-1">mayor a 8 caracteres</span>
      }
      {
        error && !width &&
        <label className="label max-w-[310px]">
          <span className="label-text-alt leading-5 font-semibold text-error">{error?.message}</span>
        </label>
      }
    </div>
  )
}

export default Input