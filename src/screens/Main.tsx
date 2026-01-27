import React from 'react';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, FlatList, StyleSheet } from 'react-native';

type StackParamsList = {
  RectPath: undefined;
  WhatsappStories: undefined;
};

const screens: (keyof StackParamsList)[] = ['RectPath', 'WhatsappStories'];

type NavigationProp = NativeStackNavigationProp<StackParamsList>;

const Main = () => {
  const navigation = useNavigation<NavigationProp>();
  const keyExtractor = (item: string) => item;
  const renderItem = ({ item }: { item: keyof StackParamsList }) => {
    return <Button title={item} onPress={() => navigation.navigate(item)} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={screens}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlistContentStyle}
      />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatlistContentStyle: {
    gap: 20,
    marginVertical: 'auto',
  },
});
