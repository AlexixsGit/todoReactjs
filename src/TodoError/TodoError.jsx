import React from "react"
import { TodoContext } from "../TodoContext/TodoContext"

export function TodoError() {
    const { error } = React.useContext(TodoContext)
    return (<React.Fragment>
        {error && <p>Lo sentimos, el sistema no esta disponible</p>}
    </React.Fragment>)
}