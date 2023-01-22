import { configureStore } from '@reduxjs/toolkit'
import testReducer from './SLICES/TestSlice'
import loadingReducer from './SLICES/LoadingSlice'
import successReducer from './SLICES/SuccessSlice'
import failureReducer from './SLICES/FailureSlice'
import blogsReducer from './SLICES/BlogsSlice'
import blogPostReducer from './SLICES/BlogPostSlice'

export default configureStore({
  reducer: {
    test: testReducer,
    loading: loadingReducer,
    success: successReducer,
    failure: failureReducer,
    blogs: blogsReducer,
    blogPost: blogPostReducer
  },
})

/*
    const test = useSelector((state) => state.test.value)
    const dispatch = useDispatch()
*/