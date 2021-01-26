import { version } from './version.js'

let host = 'http://localhost:3000'
let endpoint = 'logging'
let token = ''

export function init (config) {
  if (config.host) { host = config.host }
  if (config.token) { token = config.token }
}

export function publish (params) {
  return axios
    .post(`${host}/${version}/${endpoint}`, {
      params: params
    })
    .then(function (response) {
      console.log(`publish ${version}/${endpoint}: ${JSON.stringify(response.data, null, 2)}`)
      return response.data
    })
    .catch(function (error) {
      console.log(`publish ${version}/${endpoint}: ${JSON.stringify(error, null, 2)}`)
      return error
    })
}
