import http from '@/utils/http'

export const fetchDemo =async ()=>{
  const res = await http.get('/app')
  console.log(res.data)
  return res.data
}