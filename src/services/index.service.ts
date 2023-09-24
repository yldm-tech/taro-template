import http from '@/utils/http'
export const fetchDemo =async ()=>{
  const res = await http.get('https://httpbin.org/ip')
  console.log('res', res.origin)
  return res;
}