import axios from 'axios'

export default (apiKey) => {
  return {
    fetch: (payload = {}) => {
      return axios
        .get(`/${apiKey}`, payload)
    }
  }
}
