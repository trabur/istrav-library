import axios from '../../node_modules/axios/dist/axios.js'
import version from './version.json'

let host = 'http://localhost:3000'
let endpoint = 'users'

function init (config) {
  if (config.host) { this.host = config.host }
}

export default {
  all: () => {
    let that = this
    return axios
      .get(`${this.host}/api/${version}/${this.endpoint}`, {})
      .then(function (response) {
        console.log('all', that.endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('all', that.endpoint, error)
        return error
      })
  },

  register: (params) => {
    let that = this
    return axios
      .post(`${this.host}/api/${version}/${this.endpoint}`, {
        params: params
      })
      .then(function (response) {
        console.log('register', that.endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('register', that.endpoint, error)
        return error
      })
  },

  login: (params) => {
    let that = this
    return axios
      .post(`${this.host}/api/${version}/${this.endpoint}/login`, {
        params: params
      })
      .then(function (response) {
        console.log('login', that.endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('login', that.endpoint, error)
        return error
      })
  },

  get: (id) => {
    let that = this
    return axios
      .get(`${this.host}/api/${version}/${this.endpoint}/${id}`)
      .then(function (response) {
        console.log('get', that.endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('get', that.endpoint, error)
        return error
      })
  },

  update: (id, params) => {
    let that = this
    return axios
      .put(`${this.host}/api/${version}/${this.endpoint}/${id}`, {
        params: params
      })
      .then(function (response) {
        console.log('update', that.endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('update', that.endpoint, error)
        return error
      })
  },
  
  remove: (id) => {
    let that = this
    return axios
      .delete(`${this.host}/api/${version}/${this.endpoint}/${id}`)
      .then(function (response) {
        console.log('remove', that.endpoint, response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('remove', that.endpoint, error)
        return error
      })
  }
}

