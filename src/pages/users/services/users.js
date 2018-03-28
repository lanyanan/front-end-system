import request from '../../../utils/request';

export function fetch({ page = 1 }) {
	console.log(99)
  return request(`/api/users?_page=${page}&_limit=5`);
}