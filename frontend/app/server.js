import controllers from '../controllers/index.js';
import express from 'express';
import viteExpress from 'vite-express';
import sql from 'mssql'; 
//先確認是否有mssql:npm list mssql
//如(empty)話:npm install mssql 

const app = express();

//連資料庫
const config = {
    user: 'saim',
    password: 'Ntunhsim',
    server: 'localhost',
    database: 'Class',
    options: {
        encrypt: true, // 使用 SSL
        trustServerCertificate: true // 信任自簽名憑證
    }
};

sql.connect(config).then(pool => {
    console.log('Connected to the database.');

    app.locals.pool = pool;

    app.use('/api', controllers);

    const server = app.listen(3251, () => {
        console.log('Server is running on port 3251');
    });

    viteExpress.bind(app, server);

}).catch(err => {
    console.error('Database connection failed!', err);
});

