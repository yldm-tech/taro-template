import { ViewProps } from '@tarojs/components/types/View'
import { FunctionComponent } from 'react'
import { NativeSafeAreaViewProps } from 'react-native-safe-area-context'

export interface TaroSafeAreaViewProps {
  style?: object
}

export type TaroSafeAreaViewType = FunctionComponent<
NativeSafeAreaViewProps & ViewProps
>;

declare const TaroSafeAreaView: TaroSafeAreaViewType

export default TaroSafeAreaView
