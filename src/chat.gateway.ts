// // chat.gateway.ts
// import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
// import { Server } from 'ws';

// @WebSocketGateway()
// export class ChatGateway {
//   @WebSocketServer() server: Server;

//   @SubscribeMessage('message')
//   handleMessage(@MessageBody() data: string): void {
//     // Broadcast the received message to all connected clients
//     this.server.clients.forEach(client => {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data);
//       }
//     });
//   }
// }
