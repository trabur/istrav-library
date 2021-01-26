import * as logging from './v1/logging.js'
import * as users from './v1/users.js'
import * as vehicles from './v1/vehicles.js'

export let istrav = {
  event: {
    logging
  },
  account: {
    users,
  },
  fleet: {
    vehicles
  },
  store: {},
}