import * as users from './v1/users.js'
import * as vehicles from './v1/vehicles.js'

export let istrav = {
  account: {
    users,
  },
  fleet: {
    vehicles
  },
  store: {},
  meta: {}
}