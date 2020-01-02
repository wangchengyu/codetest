import ApiService from "@/apiservice"
import { GET_OWNERS } from "@/store/actions.type"
import { AFTER_GETOWNERS } from "@/store/mutations.type"

const url = 'http://5c92dbfae7b1a00014078e61.mockapi.io/owners';

const state = {
  owners: {},
  grades: {}
};

const actions = {
  async [GET_OWNERS] (context, params) {
    await ApiService
      .get(url)
      .then((res) => {
        context.commit(AFTER_GETOWNERS, { data: res.data, params: params })
    })
  }
};

const getters = {
  ownersToGrades (state) {
    return state.grades;
  }
};

const mutations = {
  [AFTER_GETOWNERS] (state, { data, params }) {
    state.owners = data;

    // rebuild the data structure[owner list to grade list] after get the owners data.
    var grades = {};

    if (state.owners.length) {
        state.owners.map(owner => {
        if (owner.pets && owner.pets.length) {
          grades[owner.gender] = grades[owner.gender] || [];
          grades[owner.gender] = grades[owner.gender].concat(owner.pets.filter(pet => pet.type === params.type));
        }
      });
    }

    state.grades = grades;
 
  }
};

export default { 
  state, 
  actions,  
  getters, 
  mutations 
}