import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import User from '../components/User';

type UserType = {
  id: string;
  name: string;
  storiesNb: number;
  storiesRead: number;
};

const users: UserType[] = [
  {
    id: '1',
    name: 'User1',
    storiesNb: 1,
    storiesRead: 0,
  },
  {
    id: '2',
    name: 'User2',
    storiesNb: 2,
    storiesRead: 0,
  },
  {
    id: '3',
    name: 'User3',
    storiesNb: 3,
    storiesRead: 0,
  },
  {
    id: '4',
    name: 'User4',
    storiesNb: 4,
    storiesRead: 0,
  },
  {
    id: '5',
    name: 'User5',
    storiesNb: 5,
    storiesRead: 0,
  },
  {
    id: '6',
    name: 'User6',
    storiesNb: 6,
    storiesRead: 0,
  },
  {
    id: '7',
    name: 'User7',
    storiesNb: 7,
    storiesRead: 0,
  },
  {
    id: '8',
    name: 'User8',
    storiesNb: 8,
    storiesRead: 0,
  },
  {
    id: '9',
    name: 'User9',
    storiesNb: 9,
    storiesRead: 0,
  },
  {
    id: '10',
    name: 'User10',
    storiesNb: 10,
    storiesRead: 0,
  },
];

const WhatsappStories = () => {
  const renderItem = ({ item }: { item: UserType }) => {
    const { name, storiesNb, storiesRead } = item;

    return <User name={name} storiesNb={storiesNb} storiesRead={storiesRead} />;
  };

  const keyExtractor = (item: UserType) => item.id;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlistContentStyle}
      />
    </SafeAreaView>
  );
};

export default WhatsappStories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlistContentStyle: {
    gap: 20,
  },
});
