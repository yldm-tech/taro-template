// 全局样式
import '@/assets/css/tailwind.css'

import { useDidHide,useDidShow } from '@tarojs/taro'
import { ReactElement, useEffect } from 'react'


const App =(props: { children: ReactElement }) =>{
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return props.children
}

export default App
