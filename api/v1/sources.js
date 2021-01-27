import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'sources'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { token = config.token }
}

export function publish (eventSource) {
  let url = `${host}/${version}/${endpoint}/publish/${eventSource.arguements.id}`
  eventSource.url = url
  eventSource.startAt = Date.now()
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.finishAt = Date.now()
      console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function consume (eventSource) {
  let url = `${host}/${version}/${endpoint}/consume/${eventSource.arguements.id}`
  eventSource.url = url
  eventSource.startAt = Date.now()
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.finishAt = Date.now()
      console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function check (eventSource) {
  let url = `${host}/${version}/${endpoint}/check/${eventSource.arguements.id}`
  eventSource.url = url
  eventSource.startAt = Date.now()
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.finishAt = Date.now()
      console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}