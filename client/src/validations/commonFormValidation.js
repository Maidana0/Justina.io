export const defaultRequireValidation = Object.freeze({
   required: {
      value: true,
      message: "Este campo es requerido."
   }
})

export const usernameValidation = Object.freeze({
   ...defaultRequireValidation,
   minLength: {
      value: 6,
      message: "Debe contener al menos 6 caracteres."
   },
   maxLength: {
      value: 30,
      message: "Debe contener como máximo 30 caracteres."
   },
})

export const passwordValidation = Object.freeze({
   ...defaultRequireValidation,
   minLength: {
      value: 8,
      message: "Debe contener al menos 8 caracteres."
   },
   maxLength: {
      value: 70,
      message: "Debe contener como máximo 70 caracteres."
   },
})

export const confirmPasswordValidation = (watch) => ({
   ...passwordValidation,
   validate: (value) => {
      if (watch("password") != value) return "Las contraseñas no coinciden"
   }
})

export const emailValidation = Object.freeze({
   ...defaultRequireValidation,
   minLength: {
      value: 6,
      message: "Debe contener al menos 6 caracteres."
   },
   pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Incluye un signo '@' y '.' en la dirección de correo electrónico. Ej: 'correo@dominio.com'"
   }
})

export const namesValidation = Object.freeze({
   ...defaultRequireValidation,
   maxLength: {
      value: 20,
      message: "Debe contener como máximo 20 caracteres."
   }, minLength: {
      value: 3,
      message: "Debe contener al menos 3 caracteres."
   },
   pattern: {
      value: /^[a-zA-Z\s]*$/,
      message: "Solo se permiten letras y espacios."
   }
})