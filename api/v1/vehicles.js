require('../../node_modules/axios/index.js')

import version from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'users'
let token = ''

function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { host = config.token }
}

export default {
  all: () => {
    let that = this
    return axios
      .get(`${host}/api/${version}/${endpoint}`, {
        headers: {'authorization': `Bearer ${token}`}
      })
      .then(function (response) {
        console.log('all', endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('all', endpoint, error)
        return error
      })
  },
  
  save: (params) => {
    let that = this
    return axios
      .post(`${host}/api/${version}/${endpoint}`, {
        params: params
      })
      .then(function (response) {
        console.log('save', endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('save', endpoint, error)
        return error
      })
  },
  
  get: (id) => {
    let that = this
    return axios
      .get(`${host}/api/${version}/${endpoint}/${id}`)
      .then(function (response) {
        console.log('get', endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('get', endpoint, error)
        return error
      })
  },

  update: (id, params) => {
    let that = this
    return axios
      .put(`${host}/api/${version}/${endpoint}/${id}`, {
        params: params
      })
      .then(function (response) {
        console.log('update', endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('update', endpoint, error)
        return error
      })
  },

  remove: (id) => {
    let that = this
    return axios
      .delete(`${host}/api/${version}/${endpoint}/${id}`)
      .then(function (response) {
        console.log('remove', endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('remove', endpoint, error)
        return error
      })
  }
}

