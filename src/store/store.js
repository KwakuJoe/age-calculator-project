import { createStore } from "vuex"; 
import DateCovert from "./dateClass";
// Create a new store instance.
const store = createStore({
    state () {
      return {
        date:{
            day:'10',
            month:'2',
            year:'1999',
        },

        date_result:{
            day:'',
            month:'',
            year:'',
        }
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },

      assignResult(state){
        let day = state.date.day
        let month = state.date.month
        let year = state.date.year

        // instance of the date case
        const date = new DateCovert();

        const result = date.calculateAge(year, month, day)
        console.log(result.ageYears)

        state.date_result.day = result.ageDays,
        state.date_result.month = result.ageMonths,
        state.date_result.year = result.ageYears,
        console.log('It worked bro !')
      }
    },

    actions:{

        // convertAge(context){
        //     console.log('convert function is working .........')
        //     let day = context.state.date.day
        //     let month = context.state.date.month
        //     let year = context.state.date.year

        //     // instance of the date case
        //     const date = new DateCovert();

        //     const result = date.calculateAge(year, month, day)
        //     console.log(result.ageYears)

        //     // context.state.date_result.day = result.ageDays,
        //     // context.state.date_result.month = result.ageMonths,
        //     // context.state.date_result.year = result.ageYears,
        //     // day_result = result.ageDays


        //     console.log('It worked bro !')

        // }
        
    }
  })

  
  export default store;