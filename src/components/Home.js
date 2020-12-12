import React, {useState} from 'react'
import { StyleSheet, SafeAreaView, FlatList, Text, View, Image } from 'react-native';
import testData from '../../testData';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function MovieList() {
    const [data, setData] = useState(testData);


    const renderItem = ({ item }) => (  
      <Image source={{ uri: item.image }} style={{ width: 400, height: 400 }}/>
    );

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <FlatList
                style={{backgroundColor: 'blue'}}
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
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    carousel: {
       
    }
})
