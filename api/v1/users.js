require('../../node_modules/axios/index.js')

import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'users'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { token = config.token }
}

export function all () {
  let that = this
  return axios
    .get(`${host}/api/${version}/${endpoint}`, {})
    .then(function (response) {
      console.log('all', endpoint, response.data)
      return response.data
    })
    .catch(function (error) {
      console.log('all', endpoint, error)
      return error
    })
}

export function register (params) {
  let that = this
  return axios
    .post(`${host}/api/${version}/${endpoint}`, {
      params: params
    })
    .then(function (response) {
      console.log('register', endpoint, response.data)
      return response.data
    })
    .catch(function (error) {
      console.log('register', endpoint, error)
      return error
    })
}

export function login (params) {
  let that = this
  return axios
    .post(`${host}/api/${version}/${endpoint}/login`, {
      params: params
    })
    .then(function (response) {
      console.log('login', endpoint, response.data)
      return response.data
    })
    .catch(function (error) {
      console.log('login', endpoint, error)
      return error
    })
}

export function get (id) {
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
}

export function update (id, params) {
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
}
  
export function remove (id) {
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