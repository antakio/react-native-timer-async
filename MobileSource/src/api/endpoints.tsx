/*
 * Created: 2022-06-06 20:29:37
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import { NETWORK } from '../config/constants';

const { API_BASE_URL } = NETWORK;

export const baseUrl = API_BASE_URL;
export const eventsRoute = `${API_BASE_URL}/events`;
