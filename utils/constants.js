const PORT = process.env.NODE_PORT||'4000';
const DB_URI= `mongodb+srv://dbUser:${process.env.DB_PASSWORD||'easy'}@cluster0-tjhes.mongodb.net/DBOrders?retryWrites=true&w=majority`;
module.exports = {PORT,DB_URI};