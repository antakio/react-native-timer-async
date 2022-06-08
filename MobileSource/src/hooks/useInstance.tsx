/*
 * Created: 2022-06-06 20:19:40
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import axios from 'axios';
import { NETWORK } from '../config/constants';

export const useInstance = () => {
  const axiosInstance = axios.create({
    baseURL: NETWORK.API_BASE_URL,
    headers: {
      accept: '*/*',
      'Content-Type': 'application/json-patch+json',
    },
    timeout: 3000,
  });

  return { axiosInstance };
};
