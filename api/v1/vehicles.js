import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'vehicles'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { host = config.token }
}

export function all (eventSource) {
  let url = `${host}/${version}/${endpoint}/all`
  return axios
    .get(url, {
      headers: {'authorization': `Bearer ${token}`},
      params: eventSource
    })
    .then(function (response) {
      console.log(`REST ${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function save (eventSource) {
  let url = `${host}/${version}/${endpoint}/save`
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      console.log(`REST ${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function get (eventSource) {
  let url = `${host}/${version}/${endpoint}/get/${eventSource.arguements.id}`
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      console.log(`REST ${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function update (eventSource) {
  let url = `${host}/${version}/${endpoint}/update/${eventSource.arguements.id}`
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      console.log(`REST ${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function remove (eventSource) {
  let url = `${host}/${version}/${endpoint}/remove/${eventSource.arguements.id}`
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      console.log(`REST ${url} ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ${url} ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

