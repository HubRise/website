import React, { useState, useContext, createContext } from 'react'
import PropTypes from 'prop-types'

const LayoutContext = createContext()

function LayoutProvider({ children }) {
  const [isContactVisible, setContactVisibility] = useState(false)
  const [isSuggestAppVisible, setSuggestAppVisibility] = useState(false)

  return (
    <LayoutContext.Provider
      value={{
        forms: {
          contact: {
            isVisible: isContactVisible,
            toggle: () => setContactVisibility(!isContactVisible)
          },
          suggestApp: {
            isVisible: isSuggestAppVisible,
            toggle: () => setSuggestAppVisibility(!isSuggestAppVisible)
          }
        }
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

function useLayoutContext() {
  const context = useContext(LayoutContext)

  if (!context) {
    throw new Error(`useLayoutContext must be used within LayoutProvider`)
  }

  return context
}

LayoutProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { useLayoutContext, LayoutProvider }
