import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
      return getDefaultMiddleware().concat(logger, thunk)
    }
    return getDefaultMiddleware().concat(thunk)
  }
})
