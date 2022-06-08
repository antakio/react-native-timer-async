/*
 * Created: 2022-06-06 17:53:05
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import { FlatList } from 'react-native';
import React, { MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { EventObject, ListRenderItemInfo } from '../../config/types';
import { COMPONENT_SETTINGS } from '../../config/constants';

const { REFRESHING_RATE, REFRESHING_COOLDOWN, DELAY } = COMPONENT_SETTINGS;

interface RefreshingListProps {
  refreshing: boolean;
  data: EventObject[];
  timerEnabled: boolean | null;
  onRefresh: () => void;
  renderItem: (event: ListRenderItemInfo<EventObject>) => JSX.Element;
}

export default function RefreshingList(props: RefreshingListProps) {
  // eslint-disable-next-line prefer-const
  let autoRefreshingCounter = useRef(REFRESHING_RATE);
  // eslint-disable-next-line prefer-const
  let cooldownCounter = useRef(0);
  const [refreshing] = useState<boolean>(false);
  // const [timerEnabled, setTimerEnabled] = useState<boolean>(true);
  let timerEnabled = useRef(true);
  const scrolling = useRef(false);

  const _handleRefresh = () => {
    if (cooldownCounter.current <= 0) {
      startCooldownTimer();
      props.onRefresh();
    }
  };

  const startAutoRefreshTimer = () => {
    if (autoRefreshingCounter.current <= 0 || props.data?.length === 0) {
      autoRefreshingCounter.current = REFRESHING_RATE;
      void doTimer(autoRefreshingCounter, startAutoRefreshTimer, pauseAutoRefresh);
      startCooldownTimer();
      props.onRefresh();
    }
  };

  const pauseAutoRefresh = () => {
    return !timerEnabled.current || scrolling.current;
  };

  const startCooldownTimer = () => {
    cooldownCounter.current = REFRESHING_COOLDOWN;
    void doTimer(cooldownCounter, null, null);
  };

  const isRefreshAvailable = () => {
    return cooldownCounter.current <= 0;
  };

  const delay = (delay: number) => {
    return new Promise((r) => {
      setTimeout(r, delay);
    });
  };

  const doTimer = async (
    v: MutableRefObject<number>,
    fn: (() => void) | null,
    pauseFn: (() => boolean) | null,
  ) => {
    for (let i = v.current; i > 0; i--) {
      await delay(1000 * DELAY);
      while (pauseFn && pauseFn()) {
        await delay(1000);
        console.log('paused');
      }
      v.current = v.current - 1;
      if (v.current <= 0) {
        fn && fn();
        break;
      }
      console.log(v);
    }
  };

  useEffect(() => {
    startAutoRefreshTimer();
  }, []);

  useEffect(() => {
    timerEnabled.current = props.timerEnabled ? true : false;
    if (!timerEnabled.current) {
      autoRefreshingCounter.current = 0;
    }
  }, [props.timerEnabled]);

  const keyExtractor = useCallback((item: EventObject) => item.id.toString(), []);

  return (
    <FlatList
      style={{ flex: 1 }}
      data={props.data}
      bounces={isRefreshAvailable()}
      renderItem={props.renderItem}
      keyExtractor={keyExtractor}
      b={10}
      maxToRenderPerBatch={10}
      onScrollEndDrag={() => {
        scrolling.current = false;
      }}
      onMomentumScrollEnd={() => {
        scrolling.current = false;
      }}
      onScrollBeginDrag={() => {
        scrolling.current = true;
      }}
      onMomentumScrollBegin={() => {
        scrolling.current = true;
      }}
      onRefresh={() => {
        _handleRefresh();
      }}
      refreshing={refreshing ? true : false}
    />
  );
}
