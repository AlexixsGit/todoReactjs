import React from "react";
import { TodoContext } from "../TodoContext/TodoContext";

export function TodoAddMessage() {
    const
        { loading, error, item }
            = React.useContext(TodoContext)

    return (<React.Fragment>
        {(!loading && !error && item.length === 0) && <p>¡Agrega tu primer <strong>TODO</strong>!</p>}
    </React.Fragment>)
}