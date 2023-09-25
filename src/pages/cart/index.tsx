import './index.scss'

import { Button } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

import { CountActions, CountState, useCountStore } from '@/stores/count.store'
import React from 'react'

const CartPage = () => {
  const { bears, increasePopulation } = useCountStore((state: CountState & CountActions) => state)

  const Counter = () => {
    return <h1>{bears} around here ...</h1>
  }

  const Controls = () => {
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



export default React.memo(CartPage)
