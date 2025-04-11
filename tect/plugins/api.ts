import Swal from 'sweetalert2'
import axios from 'axios'
export default defineNuxtPlugin((nuxtApp: any) => {
  const { token } = useAuth()
  const baseUrl = `${nuxtApp.$config.public.apiBase}`

  const authToken = token.value
  const apiClient = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // Auto add token to header
  apiClient.interceptors.request.use((config) => {
    if (authToken) {
      config.headers.Authorization = `${authToken}`
    }
    return config
  })

  // Handle error
  apiClient.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.error('API Error:', error.response?.data || error.message)
      return Promise.reject(error)
    }
  )

  // Function to fetch API
  const fetchApi = async (
    url: string,
    method: string = 'GET',
    body: any = {}
  ) => {
    try {
      const response = await apiClient.request({
        url,
        method,
        data: body,
      })
      return response
    } catch (error) {
      throw error
    }
  }

  return {
    provide: {
      api: {
        get: (url: string) => fetchApi(url, 'GET'),
        post: (url: string, body: any) => fetchApi(url, 'POST', body),
        put: (url: string, body: any) => fetchApi(url, 'PUT', body),
        delete: (url: string) => fetchApi(url, 'DELETE'),
        postFile: async (url: string, formData: any) => {
          try {
            const response = await apiClient.post(url, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            return response
          } catch (error) {
            throw error
          }
        },
        putFile: async (url: string, formData: any) => {
          try {
            const response = await apiClient.put(url, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
            return response
          } catch (error) {
            throw error
          }
        },
      },
    },
  }
})
