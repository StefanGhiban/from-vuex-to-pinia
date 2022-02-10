import { defineStore } from 'pinia'
import EventService from '../services/EventService'

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    eventList: []
  }),
  actions: {
    async fetchEvents() {
      try {
        const apiResponse = await EventService.getEvents()

        this.eventList = apiResponse.data
      } catch (error) {
        throw error
      }
    }
  }
})
