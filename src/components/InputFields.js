import React, {useState} from 'react';

export default ({fields, onUpdate,value}) => {
    const updateValue = (e) => {
        onUpdate({
            ...value,
            [e.target.name]: e.target.value
        })
    }
    return <div>

    {fields.map((field => {

return <input type={field.type || 'text'} onChange={updateValue} name={field.name} placeholder={field.placeholder}  />

    }))}

    </div>

}