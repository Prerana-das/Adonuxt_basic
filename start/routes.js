'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')



// Route.resource('users', 'UserController').validator(new Map([
//     [['users.store'], ['StoreUser']],
//     // [['users.update'], ['UpdateUser']]
// ]))

Route.post('users', 'UserController.store')

Route.post('products', 'ProductController.store')
Route.get('all_product', 'ProductController.all_product')
Route.post('edit_product', 'ProductController.update')
Route.post('delete_product', 'ProductController.destroy')


Route.post('register', 'UserController.store')

Route.any('*', 'NuxtController.render')
