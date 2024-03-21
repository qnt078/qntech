

export default defineNuxtPlugin((nuxtApp : any) => {
  const baseUrl = `${nuxtApp.$config.public.apiBase}/api/v1`
  const apiClient = {
    async post(resource: string, data: any) {
      const response = await fetch(`${baseUrl}${resource}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }
      return response.json()
    },
    async get(resource: string) {
      const response = await fetch(`${baseUrl}${resource}`, {
        method: "GET",
      
      })
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }
      return response.json()
    },
    async put(resource: string, data: any) {
      const response = await fetch(`${baseUrl}${resource}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }
      return response.json()
    },
    async delete(resource: string) {
      const response = await fetch(`${baseUrl}${resource}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }
      return response.json()
    },
  }
  return {
    provide: {
      api: apiClient,
    },
  };
});
