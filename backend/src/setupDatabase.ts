import mongoose from 'mongoose';
import { config } from './config';
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDatabase');

function setupDatabase(): void {
  const connect = async () => {
    try {
      await mongoose.connect(config.DATABASE_URL!);
      log.info('Database connected');
    } catch (error) {
      log.error(`Database connection error: ${error}`);
      return process.exit(1);
    }
  };
  connect();

  mongoose.connection.on('disconnected', connect);
}

export default setupDatabase;
