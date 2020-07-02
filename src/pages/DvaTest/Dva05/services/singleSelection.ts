import request from '@/utils/request';

export async function getFakeData() {
  return request('/api/singleSelection', {
    method: 'GET',
  });
}
