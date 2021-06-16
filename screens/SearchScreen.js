import React from 'react';
import { Text, View, FlatList } from 'react-native';
import db from '../config';
import { ScrollView } from 'react-native-gesture-handler';

export default class Searchscreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allTransactions: []
    }
  }
  componentDidMount=async()=>{
    const query = await db.collection("transactions").get()
    query.docs.map((doc)=>{
      this.setState({
        allTransactions:[...this.state.allTransactions, doc.data()]
      })
    })
  }
    render() {
      return (
        <FlatList 
          data={this.state.allTransactions}
          renderItem={({item})=>(

          
              <View key={index} style={{borderBottomWidth:2}}>
              
                <Text>{"Book Id:  "+transaction.bookId}</Text>
                <Text>{"Student Id:  "+transaction.studentId}</Text>
                <Text>{"Transcation Type:  "+transaction.transactionType}</Text>
                <Text>{"Date:  "+transaction.date.toDate()}</Text>
              </View>
              )}
              keyExtractor={(item,index)=>index.toString()}
              />
            );
          }
        }