const mongoose = require('mongoose');

mongoose.connect('mongodb://manoj:mkusingh28@ds163650.mlab.com:63650/manoj', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});
//console.log(mongoose);
module.exports = mongoose;