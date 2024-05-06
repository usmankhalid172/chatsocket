import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ChatModule } from './chat.module';
import { IoAdapter } from '@nestjs/platform-socket.io'; // Import IoModule
import { Gateway } from './gateway/gateway.module';

@Module({
  imports: [Gateway],
  controllers: [AppController],
  providers: [AppService,IoAdapter],
})
export class AppModule {
}

