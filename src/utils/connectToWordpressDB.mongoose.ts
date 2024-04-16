import { connect, connection, ConnectionStates } from 'mongoose';

const connectToWordpressDB = async () => {
  if (connection.readyState !== ConnectionStates.connected) {
    await connect(process.env.DB_URL!);
  }
};

export default connectToWordpressDB;
