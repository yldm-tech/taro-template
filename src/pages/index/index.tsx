import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { fetchDemo } from '@/services/index.service'
import { useBearStore } from '@/stores/index'
import './index.scss'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index text-sm text-blue-400">
        欢迎使用 NutUI React 开发 Taro 多端项目
      </View>
      <BearCounter />
      <Controls />
    </View>
  )
}


function BearCounter() {
  fetchDemo()
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

