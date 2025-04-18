/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-namespace */
// define interface type

export interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}

export namespace LoginType {
  export interface params {
    userName: string;
    userPwd: string;
  }
}
