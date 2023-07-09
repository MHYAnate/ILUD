"use client"
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/features/counter/counterSlice'
import carouselReducer from '@/features/addCarousel/adCarouselSlice'
import carousel1Reducer from '@/features/addCarousel/adCarouselSlice1'


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    carousel: carouselReducer,
    carousel1:carousel1Reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch