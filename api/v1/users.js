import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'users'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { token = config.token }
}

export function register (eventSource) {
  let url = `${host}/${version}/${endpoint}/register`
  eventSource.url = url
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.clientAt = Date.now()
      // console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      // console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function login (eventSource) {
  let url = `${host}/${version}/${endpoint}/login`
  eventSource.url = url
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.clientAt = Date.now()
      // console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      // console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function all (eventSource) {
  let url = `${host}/${version}/${endpoint}/all`
  eventSource.url = url
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.clientAt = Date.now()
      // console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      // console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function get (eventSource) {
  let url = `${host}/${version}/${endpoint}/get`
  eventSource.url = url
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.clientAt = Date.now()
      // console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      // console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function update (eventSource) {
  let url = `${host}/${version}/${endpoint}/update`
  eventSource.url = url
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.clientAt = Date.now()
      // console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      // console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}
  
export function remove (eventSource) {
  let url = `${host}/${version}/${endpoint}/remove`
  eventSource.url = url
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.clientAt = Date.now()
      // console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      // console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}