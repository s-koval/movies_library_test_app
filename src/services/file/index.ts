
import crypto from "crypto";
import fs from "fs";
import path from "path";

import { WriteFileError } from "@core/exceptions/file";

import { IFileService } from "@core/interfaces/services/file";

export class FileService implements IFileService {
  async upload(file: File): Promise<string> {
    try {
      const name = `${crypto.randomUUID()}.${path.extname(file.name)}`;

      const data = await file.arrayBuffer();

      await fs.promises.writeFile(
        path.join(process.cwd(), "public", "uploads", name),
        Buffer.from(data)
      );

      return name;
    } catch {
      throw new WriteFileError();
    }
  }
}
