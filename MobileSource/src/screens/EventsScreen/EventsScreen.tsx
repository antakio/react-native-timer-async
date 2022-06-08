/*
 * Created: 2022-06-06 15:43:16
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import React, { useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import RefreshingList from '../../components/RefreshingList/RefreshingList';
import EventsListItem from './EventsListItem';
import { fetchEventsIfNeeded } from '../../redux/actions/events';
import { Routes } from '../../routes/Routes';
import { useNavigation } from '@react-navigation/native';
import { EventObject, ListRenderItemInfo } from '../../config/types';
import { COMPONENT_SETTINGS } from '../../config/constants';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';

const PAGE_LIMIT = COMPONENT_SETTINGS.REFRESHING_LIST_LIMIT;

const EventsScreen = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<StackNavigationProp<any>>();

  const events: EventObject[] = useAppSelector((state) => state.eventsReducer.items);
  const globalTimer = useAppSelector((state) => state.eventsReducer.timer);

  useEffect(() => {
    console.log('glob changed', globalTimer);
  }, [globalTimer]);

  const _openEvent = useCallback(
    (event: EventObject) => {
      navigation.push(Routes.Event, {
        event,
      });
    },
    [navigation],
  );

  const _renderEvent = (event: ListRenderItemInfo<EventObject>) => {
    return (
      <EventsListItem
        key={event.index}
        content={event.item}
        onPress={() => _openEvent(event.item)}
      />
    );
  };

  const _fetchEvents = () => {
    void dispatch(fetchEventsIfNeeded(`?per_page=${PAGE_LIMIT}`));
  };

  return (
    <SafeAreaView style={styles.container}>
      <RefreshingList
        renderItem={_renderEvent}
        data={events}
        onRefresh={_fetchEvents}
        timerEnabled={globalTimer}
        refreshing={false}
      />
    </SafeAreaView>
  );
};

export default EventsScreen;

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
      }),
    [],
  );
};
