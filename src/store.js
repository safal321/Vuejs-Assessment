import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      name: '',
      address: '',
      gender: '',
      nationality: '',
      phone: '',
      dateOfBirth: '',
      email: '',
      educationBackground: '',
      country: '',
      preferredModeOfContact:''
  },
  mutations: {
    setName:(state,value) => {
      state.name = value
    },
    setAddress:(state,value) => {
      state.address = value
    },
    setGender:(state,value) => {
      state.gender = value
    },
    setNationality:(state,value) => {
      state.nationality = value
    },
    setPhone:(state,value) => {
      state.phone = value
    },
    setDateOfBirth:(state,value) => {
      state.dateOfBirth = value
    },
    setEmail:(state,value) => {
      state.email = value
    },
    setEducationBackground:(state,value) => {
      state.educationBackground = value
    },
    setCountry:(state,value) => {
      state.country = value
    },
    setPreferredModeOfContact:(state,value)=>{
      state.preferredModeOfContact = value
    }
  },
  actions: {

  }
})
