import { Controller, Get,Render } from '@nestjs/common';
import { AppService } from './app.service';
import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'ws';
@Controller()
export class AppController {
  @WebSocketServer() server: Server;
  
  @SubscribeMessage('message')
  handleMessage(@MessageBody() data: string): void {
    // Broadcast the received message to all connected clients
    this.server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  }
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
