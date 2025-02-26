import useSWRMutation from 'swr/mutation';
import { toast } from 'sonner';
import { AxiosResponse } from 'axios';
import { loginInUser } from './auth-api';

export function useLoginInUser() {
  return useSWRMutation('/users/login', loginInUser, {
    onSuccess(data: AxiosResponse) {
      if (data?.headers?.['authorization']) {
        localStorage.setItem('TOKEN', data.headers['authorization']);
      }

      toast.success('Login successful');
    },
  });
}
