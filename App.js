import React from 'react'
import { View } from 'react-native'
import AddEntry from './components/AddEntry'
import { blue } from './utils/colors'

export default class App extends React.Component {
  render() {
    return (
      <View style={[{backgroundColor: blue}]}>
        <AddEntry />
      </View>
    )
  }
}