export class DBException extends Error {
  public code: number;

  constructor({ message, code }) {
    super(message);
    this.message = message;
    this.code = code;
  }
}

export enum DBExceptions {
  PRODUCT_NOT_FOUND = 0,
  PRODUCT_ALREADY_EXISTS = 1,
}
