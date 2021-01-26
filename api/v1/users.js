import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'users'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { token = config.token }
}

export function all () {
  return axios
    .get(`${host}/${version}/${endpoint}`, {})
    .then(function (response) {
      console.log(`all ${version}/${endpoint}: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`all ${version}/${endpoint}: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function register (params) {
  return axios
    .post(`${host}/${version}/${endpoint}`, {
      params: params
    })
    .then(function (response) {
      console.log(`register ${version}/${endpoint}: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`register ${version}/${endpoint}: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function login (params) {
  return axios
    .post(`${host}/${version}/${endpoint}/login`, {
      params: params
    })
    .then(function (response) {
      console.log(`login ${version}/${endpoint}: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`login ${version}/${endpoint}: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function get (id) {
  return axios
    .get(`${host}/${version}/${endpoint}/${id}`)
    .then(function (response) {
      console.log(`get ${version}/${endpoint}: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`get ${version}/${endpoint}: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function update (id, params) {
  return axios
    .put(`${host}/${version}/${endpoint}/${id}`, {
      params: params
    })
    .then(function (response) {
      console.log(`update ${version}/${endpoint}: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`update ${version}/${endpoint}: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}
  
export function remove (id) {
  return axios
    .delete(`${host}/${version}/${endpoint}/${id}`)
    .then(function (response) {
      console.log(`remove ${version}/${endpoint}: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`remove ${version}/${endpoint}: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}