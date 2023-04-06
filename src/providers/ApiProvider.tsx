import React, { useMemo } from 'react'
import Api, { ApiContext } from '../api/Api'

function ApiProvider({
    children,
    initialToken,
}: {
    children: React.ReactNode
    initialToken?: string
}) {
    const api = useMemo(() => {
        const instance = new Api()
        if (initialToken) {
            instance.initialize(initialToken)
        }
        return instance
    }, [initialToken])
    return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>
}

export default ApiProvider
