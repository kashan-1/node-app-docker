module.exports = { 
    MONGO_IP: process.env.MONGO_IP || 'mongo-db',
    MONGO_PORT: process.env.MONGO_PORT || '27017',
    MONGO_USER: process.env.MONGO_USER || 'root',
    MONGO_PASS: process.env.MONGO_PASS || 'root'
};