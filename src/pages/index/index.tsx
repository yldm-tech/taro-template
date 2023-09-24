import { View } from '@tarojs/components'
import { Button } from "@nutui/nutui-react-taro"
import { fetchDemo } from '@/services/index.service'
import { Todo, useTodoStore, TodoState, TodoActions } from '@/stores/todo.store'
import './index.scss'
import { useEffect } from 'react'

function Index() {
  const { todoList, initialize, addTodo, removeAllTodo } = useTodoStore((state: TodoState & TodoActions) => state)
  useEffect(() => {
    console.log('useEffect')
    initialize()
  }, [])


  const TodoComponent = () => {
    fetchDemo()
    return todoList.map((todo: Todo) => {
      return <View key={todo.id} className="index">
        <View className="text-sm text-green-400">
          {todo.content}
        </View>
      </View>
    })
  }

  const Controls = () => {
    const id = todoList.length + 1;
    return <View className="index flex flex-col">
      <Button onClick={() => {
        addTodo({
          id: id,
          content: `todo ${id}`
        })
      }} type="primary" className="btn block w-full">
        add Todo
      </Button>
      <Button onClick={removeAllTodo} type="warning" className="btn block w-full">
        Clear
      </Button>
    </View>
  }

  return (
    <View className="nutui-react-demo">
      <View className="index text-sm text-blue-400">
        欢迎使用 NutUI React 开发 Taro 多端项目
      </View>
      <TodoComponent />
      <Controls />
    </View>
  )
}

export default Index

