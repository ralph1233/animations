import React from 'react';
import { Modal, StyleSheet } from 'react-native';
import type { UserType } from '../utils/types/user';

const UserStories = ({
  currentUserIndex,
  users,
  isVisible,
  setIsVisible,
}: {
  currentUserIndex: number;
  users: UserType[];
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}) => {
  return <Modal visible={isVisible}></Modal>;
};

export default UserStories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
