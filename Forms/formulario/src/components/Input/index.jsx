import React from 'react'
import { Controller } from "react-hook-form";

const Input = ({ type, placeholder, name, control }) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{ required: true }}
                render={({ field }) => <input {...field} type={type} class="form-control" placeholder={placeholder} />}
            />

        </>
    )
}

export { Input }