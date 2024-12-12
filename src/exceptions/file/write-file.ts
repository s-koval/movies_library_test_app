export class WriteFileError extends Error {
  constructor() {
    super("Can't write file");
  }
}
