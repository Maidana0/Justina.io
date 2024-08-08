import { useState } from "react"
import microphone from "../../assets/input/microphone.svg"
import useSpeekToText from "../../hooks/useSpeechToText"
import useLanguage from "../../hooks/useLanguage"


const TextArea = ({ label, children, register, placeholder }) => {
    const lang = useLanguage()
    const { startListening, stopListening, isListening, transcript } = useSpeekToText({
        continuous: true,
        interimResults: true,
        lang
    })

    const [text, setText] = useState("")

    const handleListening = () => {
        if (isListening) {
            setText(prevText => prevText + (transcript.length ? (prevText.length ? " " : "") + transcript : ""))
            stopListening()
            return
        }
        startListening()
    }
    return (
        <label className="form-control font-poppins mb-5">
            {
                label
                    ? <div className="label">
                        <span className="label-text text-xl font-medium">{label}</span>
                    </div>
                    : children
            }
            <div className="h-min w-11/12 md:w-10/12 mx-auto relative">
                <textarea
                    {...register}
                    className="textarea textarea-secondary rounded-md min-h-24 w-full shadow-xl pb-9"
                    placeholder={placeholder}
                    autoComplete="off"
                    value={isListening ? text + (transcript.length ? (text.length ? " " : "") + transcript : "") : text}
                    onChange={(e) => setText(e.target.value)}
                >
                </textarea>
                <button
                    type="button" onClick={handleListening}
                    className={`absolute bottom-4 right-2 p-2 rounded-md border border-secondary ${isListening && "bg-orange/85 scale-110"} `}>
                    <img
                        width={18}
                        height={24}
                        src={microphone}
                        alt="speak-microphone"
                        className="h-4 w-4"
                    />
                </button>
            </div>
            {/* <div className="label">
                <span className="label-text-alt">

                </span>
            </div> */}
        </label>
    )
}

export default TextArea