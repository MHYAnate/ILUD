"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react';
import { Services } from './adCarouselData'

export interface AdCarouselState {
  value: number
}

const random = Math.floor(Math.random()*8);

const initialState: AdCarouselState = {
  value: 0,
}

export const adCarouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    increment1: (state) => {
      state.value >= 0 && state.value < Services.length? state.value += 1 : state.value ++;
     
      }
    },
})


// Action creators are generated for each case reducer function
export const { increment1} = adCarouselSlice.actions

export default adCarouselSlice.reducer
