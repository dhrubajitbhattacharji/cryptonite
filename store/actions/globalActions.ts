import { EventStruct, GlobalState, SupportStruct } from '@/utils/type.dt'
import { PayloadAction } from '@reduxjs/toolkit'

export const globalActions = {
  setEvents: (state: GlobalState, action: PayloadAction<EventStruct[]>) => {
    state.events = action.payload
  },
  setEvent: (state: GlobalState, action: PayloadAction<EventStruct | null>) => {
    state.event = action.payload
  },
  setUsers: (state: GlobalState, action: PayloadAction<SupportStruct[]>) => {
    state.supports = action.payload
  },

  setToken: (state: GlobalState, action: PayloadAction<string>) => {
    state.token = action.payload
  },

  setDeleteModal: (state: GlobalState, action: PayloadAction<string>) => {
    state.deleteModal = action.payload
  },
  setDonorModal: (state: GlobalState, action: PayloadAction<string>) => {
    state.donorsModal = action.payload
  },
  setSupportModal: (state: GlobalState, action: PayloadAction<string>) => {
    state.supportModal = action.payload
  },
  setBanModal: (state: GlobalState, action: PayloadAction<string>) => {
    state.banModal = action.payload
  },
  setOwner: (state: GlobalState, action: PayloadAction<string>) => {
    state.owner = action.payload
  },
}