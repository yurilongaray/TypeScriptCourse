//Acessa a var de ambiente NODE_ENV por meio do process
module.exports = () => require(`../env/${process.env.NODE_ENV}.env.js`);


