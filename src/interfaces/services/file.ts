export interface IFileService {
  upload(file: File): Promise<string>;
}
