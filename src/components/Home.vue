<template>
  <div class="p-5">
    <Form  @submit="onSubmit" :validation-schema="schema">
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-3">
              <label for="exampleFieldEmail1" class="form-text fw-bold fw-bold fs-4 my-3">DAY</label>
              <Field class="form-control form-control-lg" type="text" name="day" placeholder="20" v-model="day_field"/>
              <div id="emailHelp" class="form-text fw-bold text-danger"><ErrorMessage name="day" /></div>
          </div>
          </div>
          <div class="col-lg-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-text fw-bold fs-4 my-3">MONTH</label>
              <Field class="form-control form-control-lg" type="text" name="month" placeholder="05" v-model="month_field"/>
              <div id="emailHelp" class="form-text fw-bold text-danger"><ErrorMessage name="month" /></div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-text fw-bold fs-4 my-3">YEAR</label>
              <Field class="form-control form-control-lg" type="text" name="year" placeholder="2022" v-model="year_field"/>
              <div id="emailHelp" class="form-text fw-bold text-danger"><ErrorMessage name="year" />.</div>
            </div>
          </div>

          <!-- <button class="btn btn-success"  type="submit">Submit</button>
          <button class="btn btn-circle mr-3 d-flex justify-content-center align-items-center"  type="submit">
           <i class="bi bi-activity text-white fs-5"></i>
         </button> -->
          </div>
   <!-- line seperating -->
   <div class="row align-items-center">
    <div class="col-8">
      <hr class="my-3">
    </div>
    <div class="col-4">
      <button class="btn btn-circle mr-3 d-flex justify-content-center align-items-center"  type="submit">
           <i class="bi bi-activity text-white fs-5"></i>
         </button>
    </div>
   </div>

  </Form>


    <!--  -->
    <div class="row  align-items-end">
      <div  class="col-lg-4">
         <p class="display-1 fw-bold date-text"><span class="txt-purple">{{ year_result}}</span> years</p>
         <p class="display-1 fw-bold date-text"><span class="txt-purple">{{ month_result}}</span> month</p>
         <p class="display-1 fw-bold date-text"><span class="txt-purple">{{ day_result}}</span> days</p>
      </div>
      <div  class="col-lg-8 ">
        <p class="display-1 fw-bold age">Age Calculator</p>
        <p >Enter your birth date to get the days, months, and years you spent on earth</p>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Note</strong> Though some validation may be running, do not practcie garbage in garbage out. Especially with the year
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <p class="fw-light text-sm">Developed by Kwaku Ampah, Inspied By FrontendMentor UI Challenge</p>

      </div>

    </div>

    <div class="row">
      <div class="col-lg-7">
      </div>
      <div class="col-lg-5">
      </div>
    </div>
  </div>


</template>

<script setup>
import { Form, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup';
import { useStore } from 'vuex'
import {ref, onMounted} from 'vue'

const  day_field  = ref('');
const  month_field  = ref('');
const  year_field  = ref('');

const  day_result  = ref('');
const  month_result  = ref('');
const  year_result  = ref('');




const schema = yup.object({
  day: yup.number('input number').required().max(31).min(1),
  month: yup.number().required().max(12).min(1),
  year: yup.number().required().min(1800)
});

// const { handleSubmit, isSubmitting } = useForm();

const store = useStore()

const date = store.state.date
const result = store.state.date_result



// add .value see?
function onSubmit() {
  console.log('clicked ......')
  date.day = day_field,
  date.month = month_field,
  date.year = year_field

  store.commit('assignResult')
  
  day_result.value = result.day.toString()
  month_result.value = result.month.toString()
  year_result.value = result.year.toString()

  console.log(isNaN(result.day))

}

onMounted(() => {
  store.commit('assignResult')
  
  day_result.value = result.day.toString()
  month_result.value = result.month.toString()
  year_result.value = result.year.toString()

  console.log(isNaN(result.day))

  console.log('mounted')
})




// onMounted(() => {
//   onSubmit ()
// }),


// const store = useStore()








// creating schema

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-control{
  background-color: transparent;
  height: 60px;
  font-size: 70px;
  color: white;
}

.age{
  color: #800080;
}

.text-sm{
  font-size: 12px;
}
.btn-circle {
  background-color: #800080;
;
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

/* .date-year{
  font-size: 140px;
  font-weight: bold;
} */

.date-text{
  font-size: 100px;
  font-weight: bold;
}

.txt-purple{
  color: #800080;
}

</style>
