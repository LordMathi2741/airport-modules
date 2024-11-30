import { Injectable, Logger } from "@nestjs/common";
import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from "@nestjs/common";
@Injectable()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.getMessage();
    this.logger.error(`Status: ${status}, Message: ${message}, Path: ${request.url}`);

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(), 

      message: exception.message,
      path: request.url,
    });

    
}}