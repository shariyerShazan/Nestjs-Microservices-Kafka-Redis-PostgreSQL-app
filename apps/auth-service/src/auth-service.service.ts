/* eslint-disable @typescript-eslint/require-await */
// import { KafkaService } from './../../../libs/kafka/src/kafka.service';
import { KAFKA_SERVICE, KAFKA_TOPICS } from '@app/kafka';
import {
  Inject,
  Injectable,
  // OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
// import { timestamp } from 'rxjs';

@Injectable()
export class AuthServiceService implements OnModuleInit {
  constructor(
    @Inject(KAFKA_SERVICE) private readonly kafkaClient: ClientKafka,
  ) {}
  async onModuleInit() {
    await this.kafkaClient.connect();
  }
  // async onModuleDestroy() {
  //   await this.kafkaClient.disconnect();
  // }
  async simulateUserRegistration(email: string) {
    this.kafkaClient.emit(KAFKA_TOPICS.USER_REGISTER, {
      email,
      timestamp: new Date().toISOString(),
    });
    return { message: `User registered: ${email}` };
  }
}
