// Refactorizar método ajax en clase API para que utilize try/catch
// Poder pasar como parámetros headers y body a los métodos  get, put, post y delete, y después enviarselos al método ajax()

class API {
  constructor(baseUrl, resource) {
    this.baseUrl = baseUrl
    this.resource = resource
    this.methods = { get: 'GET', put: 'PUT', post: 'POST', delete: 'DELETE' }
  }

  async ajax(method = '', headers, body) {
      try {
        const response = await fetch(`${this.baseUrl}${this.resource}`, { method, headers, body })
        const data = await response.json()
    
        return data

      } catch (error) {
        console.log(error);
      }
    
  }

  async get(headers = {}, body) {
    return await this.ajax(this.methods.get, headers, body)
  }

  async put(headers = {}, body = {}) {
    return await this.ajax(this.methods.put, headers, body)
  }

  async post(headers = {}, body = {}) {
    return await this.ajax(this.methods.post, headers, body)
  }

  async delete(headers = {}, body = {}) {
    return await this.ajax(this.methods.delete, headers, body)
  }
}

const usersApi = new API('https://jsonplaceholder.typicode.com', '/users')

usersApi.get({},{}).then(users => console.log(users))

