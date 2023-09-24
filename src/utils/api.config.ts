let baseUrlPrefix = ''
const env = process.env.NODE_ENV === 'development' ? 'development' : 'production'
console.log('编译环境：',process.env.NODE_ENV)
switch (env) {
  case 'development':
    baseUrlPrefix = 'http://localhost:3000'
    break
  case 'production':
    baseUrlPrefix = 'https://api.yldm.tech'
    break
}

const api = {
  baseUrl: baseUrlPrefix,
}

export default api