import { version } from './version.js'

let host = 'http://localhost:3000'
let component = 'apps'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { host = config.token }
}

export function save (eventSource) {
  let url = `${host}/${version}/${component}/save`
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
  let url = `${host}/${version}/${component}/all`
  eventSource.url = url
  return axios
    .post(url, {
      headers: {'authorization': `Bearer ${token}`},
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
  let url = `${host}/${version}/${component}/get`
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
  let url = `${host}/${version}/${component}/update`
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
  let url = `${host}/${version}/${component}/remove`
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

export function endpoint (eventSource) {
  let url = `${host}/${version}/${component}/endpoint`
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

export function totals (eventSource) {
  let url = `${host}/${version}/${component}/totals`
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

