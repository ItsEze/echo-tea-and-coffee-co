async function basicFetch(url, payload) {
    const res = await fetch(url, payload)
    const body = await res.json()
    return body
  }

  export async function signup(context) {
    // const base_url = `http://${import.meta.env.VITE_BASE_URL}`
    // const endpoint = '/users/signup/'
    // const url = new URL(endpoint, base_url)
    const url = 'http://127.0.0.1:8000/users/signup'
  
  
  
    console.log(context)
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch(url, payload)
    return body
  }
  
  export async function login(context) {
    // const base_url = `http://${import.meta.env.VITE_BASE_URL}`
    // const endpoint = '/users/get-token/'
    // const url = new URL(endpoint, base_url)
    const url = 'http://127.0.0.1:8000/users/get-token'
  
    console.log(context)
    const payload = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(context)
    }
    const body = await basicFetch(url, payload)
    return body.token
  }