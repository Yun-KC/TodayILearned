import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/a')
  getRootRoute() {
    return '무야호';
  }
}
