/*
 * Created: 2022-06-06 15:43:16
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import React, { useEffect } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { EventScreenProps } from '../../config/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setEnableTimer } from '../../redux/actions/events';

const EventScreen = ({ route }: EventScreenProps) => {
  const { event } = route.params;
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(setEnableTimer(false));

    return () => {
      void dispatch(setEnableTimer(true));
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.actorContainer}>
          <Image style={styles.image} source={{ uri: event.actor.avatar_url }} />
          <Text style={styles.actorLogin}>{event.actor.login}</Text>
        </View>
        <Text>{JSON.stringify(event, null, 2)}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  actorLogin: {
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    borderRadius: 100,
    height: 150,
    width: 150,
  },
});
