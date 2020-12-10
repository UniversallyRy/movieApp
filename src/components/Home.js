import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, FlatList, Text, View, Image } from 'react-native';
import testData from '../../testData';




export default function Home() {
    const [data, setData] = useState(testData);


    const renderItem = ({ item }) => (
      <>
      
      <Image source={{ uri: item.image }} style={{ width: 400, height: 400 }}/>
      </>
    );

    return (
        <View>
            <SafeAreaView style={styles.container}>
                <FlatList
                style={styles.carousel}
                horizontal
                data={testData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
