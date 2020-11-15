import { Comic } from './comic';

export interface ResponseHttp {
  data: Comic;
  status: number;
  message: string;
}
