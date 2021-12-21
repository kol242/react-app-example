import React from 'react'
import { createStore } from './Store'
import { useLocalStore } from 'mobx-react'

const StoreContext = React.createContext(null)

export const StoreProvider = ({children}) => {
    const store = useLocalStore(createStore)

    return <StoreContext.Provider value={store}>
        {children}
    </StoreContext.Provider>
}

export const useStore = () => React.useContext(StoreContext)