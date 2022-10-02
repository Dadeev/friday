import React, {useState} from 'react';
import style from './SuperComponents.module.css'
import SuperButton from "../../common/components/SuperButton/SuperButton";
import SuperInputText from "../../common/components/SuperInput/SuperInputText";
import SuperCheckbox from "../../common/components/SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/components/SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../common/components/SuperSelect/SuperSelect";
import SuperRadio from "../../common/components/SuperRadio/SuperRadio";

export const SuperComponents = () => {
    const arr = ['x', 'y', 'z']
    const [text, setText] = useState<string>('')
    const [valueToSpun, setValueToSpun] = useState<string>('')
    const [valueRadio, setValueRadio] = useState(arr[0])
    const [valueSelect, setValueSelect] = useState(arr[0])
    return (
        <div className={style.SuperComponents}>
            <SuperButton>Super Button</SuperButton>
            <SuperInputText onChangeText={setText} value={text} error={text ? '' : 'error'}/>
            <SuperCheckbox>some text</SuperCheckbox>
            <SuperEditableSpan value={valueToSpun} onChangeText={setValueToSpun}
                               spanProps={{children: valueToSpun ? undefined : '✎ enter text...'}}/>
            <SuperSelect options={arr} value={valueSelect} onChangeOption={setValueSelect}/>
            <SuperRadio options={arr} value={valueRadio} onChangeOption={setValueRadio}/>
        </div>
    );
};