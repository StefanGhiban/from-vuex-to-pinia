import { defineStore } from 'pinia'
import EventService from '../services/EventService'

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    eventList: [],
    selectedEvent: {},
    user: 'Adam Jahr'
  }),
  actions: {
    createEvent(event) {
      return EventService.postEvent(event)
        .then(() => {
          this.eventList.push(event)
        })
        .catch(error => {
          throw error
        })
    },
    async fetchEvents() {
      try {
        const apiResponse = await EventService.getEvents()

        this.eventList = apiResponse.data
      } catch (error) {
        throw error
      }
    },
    fetchEvent(eventId) {
      const existingEvent = this.eventList.find(event => event.id === eventId)

      if (existingEvent) {
        this.selectedEvent = existingEvent
      } else {
        return EventService.getEvent(eventId)
          .then(response => {
            this.selectedEvent = response.data
          })
          .catch(error => {
            throw error
          })
      }
    }
  }
})
