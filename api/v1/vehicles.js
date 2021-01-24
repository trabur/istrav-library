import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'vehicles'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { host = config.token }
}

export function all () {
  return axios
    .get(`${host}/${version}/${endpoint}`, {
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
}

export function save (params) {
  return axios
    .post(`${host}/${version}/${endpoint}`, {
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
}

export function get (id) {
  return axios
    .get(`${host}/${version}/${endpoint}/${id}`)
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
  return axios
    .put(`${host}/${version}/${endpoint}/${id}`, {
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
  return axios
    .delete(`${host}/${version}/${endpoint}/${id}`)
    .then(function (response) {
      console.log('remove', endpoint, response.data)
      return response.data
    })
    .catch(function (error) {
      console.log('remove', endpoint, error)
      return error
    })
}

