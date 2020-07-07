/* eslint-disable react/prop-types */
import React from 'react'

export default function Editor(props) {
    return (
            <textarea
                id="editor"
                onChange={props.handleChange}
                defaultValue={props.value}
                />
    )
}

