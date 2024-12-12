export class JwtNotFound extends Error {
  constructor() {
    super("Token not found");
  }
}
