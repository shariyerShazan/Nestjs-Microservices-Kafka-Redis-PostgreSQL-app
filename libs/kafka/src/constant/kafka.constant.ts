export const KAFKA_BROKER = process.env.KAFKA_BROKER ?? 'localhost:9092';
export const KAFKA_CLIENT_ID = 'kafka-microservices';
export const KAFKA_CONSUMER_GROUP = 'kafka-mircoservices-consumer';

export const KAFKA_TOPICS = {
  // auth
  USER_REGISTER: 'user.register',
  USER_LOGIN: 'user.login',
  PASSWORD_RESET_REQUESTED: 'user.password-reset-requested',

  // event
  EVENT_CREATED: 'event.created',
  EVENT_UPDATED: 'event.updated',
  EVENT_DELETED: 'event.deleted',
  EVENT_CANCELLED: 'event.cancelled',

  // ticket
  TICKET_PURCHASED: 'ticket.purchased',
  TICKET_CANCELLED: 'ticket.cancelled',
  TICKET_CHECKED_IN: 'ticket.checked-in',

  // payments
  PAYMENT_COMPLETE: 'payment.complete',
  PAYMENT_FAILED: 'payment.failed',
  PAYMENT_REFUNDED: 'payment.refunded',

  // notification
  SEND_EMAIL: 'notification.send-email',
  SEND_PUSH: 'notification.send-push',
};

export type KafkaTopics = (typeof KAFKA_TOPICS)[keyof typeof KAFKA_TOPICS];
