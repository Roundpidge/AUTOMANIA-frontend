import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePageStore = defineStore('page', () => {
 const slike = [{ prvi: 'https://www.svgrepo.com/show/493480/car.svg' },]

  return { slike }
})
