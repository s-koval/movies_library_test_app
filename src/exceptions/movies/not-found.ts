export class MovieNotFoundError extends Error {
  constructor() {
    super("Movie is not defined");
  }
}
