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
      console.log(`all ${version}/${endpoint}: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`all ${version}/${endpoint}: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function save (params) {
  return axios
    .post(`${host}/${version}/${endpoint}`, {
      params: params
    })
    .then(function (response) {
      console.log(`save ${version}/${endpoint}: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`save ${version}/${endpoint}: ${JSON.stringify(error, null, 2)}`)
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

