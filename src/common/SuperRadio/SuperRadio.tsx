import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options: string[]
    onChangeOption: (option: any) => void
    value: string
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (value: string) => {
        onChangeOption(value)
    }

    const mappedOptions = options.map((o, i) => {
            return <label className={s.radio} key={name + '-' + i}>
                <input
                    type={'radio'}
                    checked={o === value}
                    onChange={() => onChangeCallback(o)}
                />
                {o}
            </label>
        }
    )

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
