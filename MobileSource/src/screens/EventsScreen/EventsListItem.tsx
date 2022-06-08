import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useMemo } from 'react';
import { EventObject } from '../../config/types';

interface EventsListItemProps {
  content: EventObject;
  onPress?: () => void;
}

const EventsListItem = (props: EventsListItemProps) => {
  const style = useStyles();

  const createdAt = new Date(props.content.created_at)
    .toISOString()
    .split('.')[0]
    .replace('T', ' ');

  return (
    <TouchableOpacity style={style.container} onPress={props.onPress}>
      <View>
        <Image style={style.avatar} source={{ uri: props.content.actor.avatar_url }} />
      </View>
      <View style={style.description}>
        <Text>
          {props.content.actor.login} pushed {props.content.type} to{' '}
        </Text>
        <Text>{props.content.repo.name}</Text>
        <Text style={style.timestamp}>{createdAt}</Text>
      </View>
    </TouchableOpacity>
  );
};

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'row',
          paddingVertical: 15,
          paddingHorizontal: 10,
        },
        timestamp: {
          color: 'lightgrey',
        },

        avatar: {
          borderRadius: 50,
          height: 50,
          width: 50,
        },

        description: {
          flex: 1,
          marginVertical: 5,
          marginHorizontal: 10,
        },
      }),
    [],
  );
};

export default EventsListItem;
