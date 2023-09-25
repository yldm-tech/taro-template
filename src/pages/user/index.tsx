import { View } from '@tarojs/components'
import { Avatar } from "@nutui/nutui-react-taro"
import AvatarPhoto from '@/assets/images/user_default.png'
import './index.scss'

function Index() {
  return (
    <View className="my">
      <View className="header pt-20 pb-5 flex items-center">
        <View>
          <Avatar size='100' className="mx-5" src={AvatarPhoto} />
        </View>
        <View className="mx-8">
          <View className="text-xl text-black">
            <span className="mr-1">小莫</span>
          </View>
          <View className="text-md py-1 text-gray-300">
            <span>ID:83387856</span>
          </View>
        </View>
      </View>
      <View className="mr-5">

      </View>
    </View>
  )
}

export default Index
