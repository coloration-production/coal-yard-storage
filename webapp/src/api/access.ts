// import { base } from './base'
import { SigninPayload } from '~/types'

function signin(payload: SigninPayload) {
  const { name, pwd } = payload
  return name === 'admin' && pwd === '123456'
    ? Promise.resolve({
      access_token: '',
      user: {
        name,
        role: {
          name,
          alias: name,
          permissions: [],
        },
        role_id: 1,
        created: '',
      },
    })
    : Promise.reject('登录失败') as any
  // return base.post('/signin', payload)
}

function signout() {
  return Promise.resolve()
  // return base.patch('/signout', null, { responseType: 'text' })
}

export const accessApi = {
  signin, signout,
}
