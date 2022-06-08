/*
 * Created: 2022-06-08 18:54:18
 * Author: Andrei V. Rybkin <andrei@antakio.com>
 * -----
 * Copyright (c) 2022 Andrei V. Rybkin
 */

import { useInstance } from '../hooks/useInstance';

export const Get = (query: string) => {
  const { axiosInstance } = useInstance();
  console.log('[API REQUEST]', query);
  return axiosInstance.get(query);
};
