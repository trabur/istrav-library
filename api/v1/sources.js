import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'sources'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { token = config.token }
}

export function publish (id, params) {
  let url = `${host}/${version}/${endpoint}/publish/${id}`
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

export function consume (id, params) {
  let url = `${host}/${version}/${endpoint}/consume/${id}`
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

export function check (id) {
  let url = `${host}/${version}/${endpoint}/check/${id}`
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