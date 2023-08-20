import React from "react";

export function TodoAddMessage({ loading, error, item }) {
    return (<React.Fragment>
        {(!loading && !error && item.length === 0) && <p>¡Agrega tu primer <strong>TODO</strong>!</p>}
    </React.Fragment>)
}