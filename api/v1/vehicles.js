import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'vehicles'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { host = config.token }
}

export function all () {
  let url = `${host}/${version}/${endpoint}`
  return axios
    .get(url, {
      headers: {'authorization': `Bearer ${token}`}
    })
    .then(function (response) {
      console.log(`${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function save (params) {
  let url = `${host}/${version}/${endpoint}`
  return axios
    .post(url, {
      params: params
    })
    .then(function (response) {
      console.log(`${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function get (id) {
  let url = `${host}/${version}/${endpoint}/${id}`
  return axios
    .get(url)
    .then(function (response) {
      console.log(`${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function update (id, params) {
  let url = `${host}/${version}/${endpoint}/${id}`
  return axios
    .put(url, {
      params: params
    })
    .then(function (response) {
      console.log(`${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function remove (id) {
  let url = `${host}/${version}/${endpoint}/${id}`
  return axios
    .delete(url)
    .then(function (response) {
      console.log(`${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

