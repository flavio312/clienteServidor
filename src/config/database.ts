import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('hotel', 'cesar', 'flavio312', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
