import Taro from '@tarojs/taro';
import apiConfig from './api.config'

interface RequestOptions {
    data?: any;
    params?: any;
    headers?: {
      contentType?: string;
    };
  }

//网络请求拦截器
const interceptor = function (chain: Taro.Chain) {
  const requestParams = chain.requestParams
  let token = Taro.getStorageSync('TOKEN')//拿到本地缓存中存的token
  requestParams.header = {
    ...requestParams.header,
    Authorization: 'Bearer ' + token //将token添加到头部
  }
  return chain.proceed(requestParams).then(res => { return res })
}

Taro.addInterceptor(interceptor)

const request = async (method:string, url:string, params?:RequestOptions) => {
  // 由于post请求时习惯性query参数使用params，body参数使用data，而taro只有data参数，使用contentType作为区分，因此此处需要做一个判断
  let contentType = params?.data ? 'application/json' : 'application/x-www-form-urlencoded';
  if (params) contentType = params?.headers?.contentType || contentType;
  let requestUrl = apiConfig.baseUrl + url;
  if(url.startsWith('http') || url.startsWith('https')){
    requestUrl = url;
  } 
  const option:Taro.request.Option = {
    method: method as Taro.request.Option['method'],
    url: requestUrl,
    data: params && (params?.data || params?.params),
    header: {
      'content-type': contentType,
    },
    success(res) {
    //根据不同返回状态值3进行操作
      switch (res?.statusCode) {
        case 503: {
          break;
        }
        default:
          break;
      }
    },
    fail(e:any) {
      console.log('api', '请求接口出现问题', e);
    }
  }
  const resp = await Taro.request(option);
  return resp.data;//根据个人需要返回
}

export default {
  get: (url:string, config?:RequestOptions) => {
    return request('GET', url, config);
  },
  post: (url:string, config?:RequestOptions) => {
    return request('POST', url, config);
  },
  put: (url:string, config?:RequestOptions) => {
    return request('PUT', url, config);
  },
  delete: (url:string, config?:RequestOptions) => {
    return request('DELETE', url, config);
  },
  patch: (url:string, config?:RequestOptions) => {
    return request('PATCH', url, config);
  },
}
