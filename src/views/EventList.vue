<script>
import { useEventStore } from '../stores/eventStore'
import EventCard from '../components/EventCard.vue'
import { mapActions, mapState } from 'pinia'

export default {
  components: {
    EventCard
  },
  computed: {
    ...mapState(useEventStore, ['eventList'])
  },
  methods: {
    ...mapActions(useEventStore, ['fetchEvents'])
  },
  created() {
    this.fetchEvents()
  }
}
</script>

<template>
  <h1>Events for Good</h1>
  <div class="events">
    <EventCard v-for="event in eventList" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
