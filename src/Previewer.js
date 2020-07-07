import React from 'react'

export default function Previewer(props) {
    return (
        <div 
            id="preview" 
            className="content" 
            dangerouslySetInnerHTML={props.getRawMarkup()}>
        </div>
    )
}
