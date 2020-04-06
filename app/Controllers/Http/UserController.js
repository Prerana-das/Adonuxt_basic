'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const { validate } = use('Validator')

const User = use('App/Models/User')
/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

  }


  /**
   * Render a form to be used for creating a new user.
   * GET users/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    
  }

  /**
   * Create/save a new user.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {  
   
    // const validation= await validate(request.all(),messages,{
    //       name: 'required|min:3|max:255',
    //       email: 'required|email|unique:users,email',
    //       password: 'required|min:6'
    // })
    // if(validation.fails()){
    //   }

    let reqData = request.all()
    const rules = {
          name: 'required|min:3|max:255',
          email: 'required|email|unique:users,email',
          password: 'required|min:6'
    }
    const messages = {
        'email.required': 'Email is required',
        'email.unique': 'Email already in use',
        'email.email': 'Invalid Email',
        'name.min':' Your name needed minimum 3 character',
        'password.min':'Your password needed minimum 6 character'
        
    }
    const validation = await validate(reqData, rules, messages)

    if (validation.fails()) {
        return response.status(401).json(validation.messages())
    }

    delete reqData.confirm_password
    const data = await User.create(reqData)

    return response.status(201).json(data) 
  }

  

  async userLogin({ request, response, auth }){

    const data = request.all()

    try {
      console.log(data)
      let user = await auth.query().attempt(data.email, data.password)  
      return response.status(200).json(user) 
    } catch (e) {
        console.log(e.message)
        return response.status(401).json(
            {
                'msg': 'Invalid email or password. Please try again.'
            }
        )
    }

}


async logout({ response, auth }) {
  try {
      await auth.logout()
      return response.redirect('/login')
  } 
  catch (e) {
      return false
  }
}

  /**
   * Display a single user.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing user.
   * GET users/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update user details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a user with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }



}

module.exports = UserController
