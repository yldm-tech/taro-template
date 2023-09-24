import { View } from '@tarojs/components'
import { CountActions, CountState, useCountStore } from '@/stores/count.store'
import { Button } from "@nutui/nutui-react-taro"
import './index.scss'

function Index() {
  const { bears, increasePopulation } = useCountStore((state: CountState & CountActions) => state)

  function Counter() {
    return <h1>{bears} around here ...</h1>
  }

  function Controls() {
    return <View className="index">
      <Button onClick={increasePopulation} type="primary" className="btn">
        +1
      </Button>
    </View>
  }


  return (
    <View className="nutui-react-demo">
      <Counter />
      <Controls />
    </View>
  )
}



export default Index
