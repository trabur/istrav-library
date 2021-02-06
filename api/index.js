import * as sources from './v1/sources.js'
import * as backup from './v1/backup.js'
import * as logging from './v1/logging.js'
import * as users from './v1/users.js'
import * as cart from './v1/cart.js'
import * as orders from './v1/orders.js'
import * as members from './v1/members.js'
import * as apps from './v1/apps.js'
import * as vehicles from './v1/vehicles.js'
import * as featured from './v1/featured.js'
import * as categories from './v1/categories.js'
import * as products from './v1/products.js'

export let istrav = {
  event: {
    sources,
    backup,
    logging
  },
  tenant: {
    members,
    apps
  },
  account: {
    users,
    cart,
    orders
  },
  fleet: {
    vehicles
  },
  store: {
    featured,
    categories,
    products
  }
}