import api from './config'

export const LoginService = async (email: string, Password: string) => {
  try {
    const userData = await api.post(
      `/public/register/login?email=${email}&password=${Password}`
    )
    const { token } = userData.data
    localStorage.setItem('token', token)
    api.defaults.headers.Authorization = token
    return { sucess: true, massage: 'Login Efetuado' }
  } catch (error) {
    console.log(error)
  }
}
