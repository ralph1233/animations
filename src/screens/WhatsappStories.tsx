import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import User from '../components/User';
import UserStories from '../components/UserStories.ios';
import type { UserType } from '../utils/types/user';

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
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentUserIndex, setCurrentUserIndex] = useState<number>(0);

  const renderItem = ({ item, index }: { item: UserType; index: number }) => {
    const { name, storiesNb, storiesRead } = item;

    return (
      <User
        name={name}
        storiesNb={storiesNb}
        storiesRead={storiesRead}
        listIndex={index}
        setCurrentIndex={setCurrentUserIndex}
      />
    );
  };

  const keyExtractor = (item: UserType) => item.id;

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.flatlistContentStyle}
      />
      <UserStories
        currentUserIndex={currentUserIndex}
        users={users}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </View>
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
