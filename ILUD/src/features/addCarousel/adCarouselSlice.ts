"use client"
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { useState, useEffect } from 'react';

export interface AdCarouselState {
  value: number
}

const random = Math.floor(Math.random()*8);

const initialState: AdCarouselState = {
  value: random,
}

export const adCarouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    increment1: (state) => {
     state.value + 1

  useEffect(() => {
    const interval = setInterval(() => {
      increment1();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

    },

    increment2: (state) => {
      state.value + 1
 
   useEffect(() => {
     const interval = setInterval(() => {
       increment1();
     }, 5500);
 
     return () => clearInterval(interval);
   }, []);
    },
  },
})


// Action creators are generated for each case reducer function
export const { increment1, increment2} = adCarouselSlice.actions

export default adCarouselSlice.reducer
