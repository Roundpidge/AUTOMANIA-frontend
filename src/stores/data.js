import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const cars=[{id:1, name:"500", size:3.5, health:900, power:70, weight:9 },
            {id:2, name:"Clio", size:3.7, health:960, power:98, weight:9 },
            {id:2, name:"Polo", size:3.9, health:1200, power:55, weight:12 },
]

export const useCarStore = defineStore('cars', () => {

  const car=ref(cars)

 const slike = [{ prvi: 'https://www.svgrepo.com/show/493480/car.svg' },]
  return { car, slike }
})
