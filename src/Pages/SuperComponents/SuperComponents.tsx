import React, {ChangeEvent, useState} from 'react';
import style from './SuperComponents.module.css'
import SuperButton from "../../common/SuperButton/SuperButton";
import SuperInputText from "../../common/SuperInput/SuperInputText";
import SuperCheckbox from "../../common/SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../common/SuperSelect/SuperSelect";
import SuperRadio from "../../common/SuperRadio/SuperRadio";

export const SuperComponents = () => {
    const [text, setText] = useState<string>('')

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    const [ValuetoSpun, setValuetoSpun] = useState<string>('')

    const arr = ['x', 'y', 'z']
    const [value, onChangeOption] = useState<string>(arr[0])
    const changeOption = (value: string) => {
        onChangeOption(value)
    }
    return (
        <div className={style.SuperComponents}>
            <SuperButton>Super Button</SuperButton>
            <SuperInputText onChangeText={setText} value={text} error={text ? '' : 'error'}/>

            <SuperCheckbox checked={checked} onChangeChecked={setChecked}>some text</SuperCheckbox>
            <SuperCheckbox checked={checked} onChange={testOnChange}/>

            <SuperEditableSpan value={ValuetoSpun} onChangeText={setValuetoSpun}
                               spanProps={{children: ValuetoSpun ? undefined : '✎ enter text...'}}
            />
            <SuperSelect options={arr} value={value} onChangeOption={changeOption}/>
            <SuperRadio name={'radio'} options={arr} value={value} onChangeOption={changeOption}
            />
        </div>
    );
};
