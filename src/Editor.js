import React from 'react'

export default function Editor(props) {
    return (
       <div>
            <textarea
                id="editor"
                onChange={props.handleChange}
                defaultValue={props.value}
                />
       </div>    
    )
}
