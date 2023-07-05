import { configureStore } from '@reduxjs/toolkit'
import allReducer from './AllSlices'

export default configureStore({
  reducer: {
    test: allReducer,
  },
})

/*
    const test = useSelector((state) => state.test.value)
    const dispatch = useDispatch()
*/