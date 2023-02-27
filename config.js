const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.resolve(`${process.env.NODE_ENV}.env`),
});
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    MONGODB: process.env.MONGODB || 'mongodb+srv://I2vdb23:AM8hH9cAinx3TCmn@i2vddb2023.6fdbu6u.mongodb.net/I2vDdb2023',
    JWTOKEN: process.env.JWTOKEN || 'asd42e62-g465-4bc1-ae2c-da1f27kk3a20',
    S3_ACCESSKEYID:process.env.S3_ACCESSKEYID || 'AKIAT7BWYB7TFBK22UUD',
    S3_SECRETACCESSKEY:process.env.S3_SECRETACCESSKEY || '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'
};
