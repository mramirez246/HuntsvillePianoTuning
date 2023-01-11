import { configureStore } from '@reduxjs/toolkit'
import testReducer from './SLICES/TestSlice'

export default configureStore({
  reducer: {
    test: testReducer
  },
})

/*
    const test = useSelector((state) => state.test.value)
    const dispatch = useDispatch()
*/