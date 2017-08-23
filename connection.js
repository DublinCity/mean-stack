const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/employees',{useMongoClient: true })
console.log('mongoose is connected!\n')