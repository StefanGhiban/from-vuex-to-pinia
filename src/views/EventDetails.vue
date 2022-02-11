<script>
import { useEventStore } from '../stores/eventStore'

export default {
  props: ['id'],
  setup() {
    const eventStore = useEventStore()

    return { eventStore }
  },
  created() {
    try {
      this.eventStore.fetchEvent(this.id)
    } catch (error) {
      this.$router.push({
        name: 'ErrorDisplay',
        params: { error: error }
      })
    }
  },
  computed: {
    event() {
      return this.eventStore.selectedEvent
    }
  }
}
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
