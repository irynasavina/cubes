import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import main from './costants/main';
import AlgorithmCard from './components/AlgorithmCard';

export default function App() {
    const cards = main['3x3x3'].OLL.map((card, i) => <AlgorithmCard key={i} {...card}/>)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {cards}
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
