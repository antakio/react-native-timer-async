/*
 * Created: 2022-06-07 17:26:39
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import * as endpoints from '../api/endpoints';
import { Get } from '../utils/api';

export const getEvents = (params: string) => Get(endpoints.eventsRoute + params);
// export const getEvents2 = (params: string) => Get(endpoints.eventsRoute + params);
// export const getEvents3 = (params: string) => Get(endpoints.eventsRoute + params);
// export const getEvents4 = (params: string) => Get(endpoints.eventsRoute + params);
// export const getEvents5 = (params: string) => Get(endpoints.eventsRoute + params);
