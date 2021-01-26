import * as sources from './v1/sources.js'
import * as backup from './v1/backup.js'
import * as logging from './v1/logging.js'
import * as users from './v1/users.js'
import * as vehicles from './v1/vehicles.js'

export let istrav = {
  event: {
    sources,
    backup,
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