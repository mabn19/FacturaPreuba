import { Sequelize } from "sequelize";
import setUpModels from "./index.mjs"


export const sequelizeInstance = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
  });

  try {
    await sequelizeInstance.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  console.log(setUpModels)
  setUpModels(sequelizeInstance);
  
  (async () => {
    await sequelizeInstance.sync();
    // Code here
  })();

  