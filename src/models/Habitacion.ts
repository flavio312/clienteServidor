import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Habitacion extends Model {
  public idHabitacion!: number;
  public numHabitacion!: string;
  public tipo!: string;
  public precioXNoche!: number;
  public estado!: string;
}

Habitacion.init({
  idHabitacion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  numHabitacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precioXNoche: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'Habitacion',
});

export default Habitacion;
