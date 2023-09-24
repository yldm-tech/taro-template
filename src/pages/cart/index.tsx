import { View } from '@tarojs/components'
import { useCountStore } from '@/stores/count'
import { Button } from "@nutui/nutui-react-taro"
import './index.scss'

function Index() {
  return (
    <View className="nutui-react-demo">
      <Counter />
      <Controls />
    </View>
  )
}

function Counter() {
  const bears = useCountStore((state: any) => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useCountStore((state: any) => state.increasePopulation)
  return <View className="index">
    <Button onClick={increasePopulation} type="primary" className="btn">
      +1
    </Button>
  </View>
}

export default Index
