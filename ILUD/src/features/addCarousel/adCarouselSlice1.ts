"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { useSelector} from 'react-redux'
import { Services } from './adCarouselData'



export interface AdCarouselState {
  value: number
}


const initialState: AdCarouselState = {
  value: 0,
}

export const adCarouselSlice1 = createSlice({
  name: 'carousel1',
  initialState,
  reducers: {
    increment2: (state) => {
      state.value === Services[length].services.length - 1 ?state.value = 0 :state.value += 1;
    },
  },
})


// Action creators are generated for each case reducer function
export const {increment2} = adCarouselSlice1.actions

export default adCarouselSlice1.reducer
