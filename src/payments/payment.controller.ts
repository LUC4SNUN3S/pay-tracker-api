import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileUploadService } from "@/payments/file-upload/file-upload.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('payments')
export class PaymentController {
  constructor(private readonly fileUploadService: FileUploadService) { }


  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const parsedData = await this.fileUploadService.readAndTypeFile(file.path);

    console.log(parsedData)
  }

}