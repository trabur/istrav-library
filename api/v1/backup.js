import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'backup'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { token = config.token }
}

export function load (eventSource) {
  let url = `${host}/${version}/${endpoint}/load`
  eventSource.url = url
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.clientAt = Date.now()
      console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}

export function save (eventSource) {
  let url = `${host}/${version}/${endpoint}/save`
  eventSource.url = url
  return axios
    .post(url, {
      params: eventSource
    })
    .then(function (response) {
      response.data.clientAt = Date.now()
      console.log(`REST ::: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`REST ::: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}