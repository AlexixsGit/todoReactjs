import React from "react"

export function TodoError({ error }) {
    return (<React.Fragment>
        {error && <p>Lo sentimos, el sistema no esta disponible</p>}
    </React.Fragment>)
}