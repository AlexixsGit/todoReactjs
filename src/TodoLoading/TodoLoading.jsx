import React from "react"
import { CircularProgress, Box } from "@mui/material"


export function TodoLoading({ loading }) {
    if (loading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>)
    }
}