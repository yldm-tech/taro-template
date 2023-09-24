import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { useBearStore } from '@/stores/index'
import http from '@/utils/http'
import './index.scss'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index text-xl text-blue-400">
        欢迎使用 NutUI React 开发 Taro 多端项目
      </View>
      <BearCounter />
      <Controls />
    </View>
  )
}

const handleFetch = async () => {
  const res = await http.get('https://httpbin.org/ip')
  console.log('res', res.origin)
}


function BearCounter() {
  handleFetch()
  const bears = useBearStore((state: any) => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useBearStore((state: any) => state.increasePopulation)
  return <View className="index">
    <Button onClick={increasePopulation} type="primary" className="btn">
      +1
    </Button>
  </View>
}

export default Index

