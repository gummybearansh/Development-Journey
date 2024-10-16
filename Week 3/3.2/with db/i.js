const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:pass@cluster0.hif20.mongodb.net/")

const User = mongoose.model('Users', { name: String, email: String, password: String });

const user = new User({ 
    name: 'Zildjian', 
    email: "adlsfjad@", 
    password: "123" 
});
user.save()