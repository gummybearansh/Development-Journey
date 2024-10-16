const express = require("express");
const zod = require("zod");
const app = express();

// required: 
// {
//      username: string
//      email: email
//      password: minimum 8 character string;
// }
const schema = zod.object({
    username: zod.string(), 
    email: zod.string().email(), 
    password: zod.string().min(8)
});

app.use(express.json());

app.post('/', (req, res) => {
    const user = req.body.user;
    const response = schema.safeParse(user);
    if (!response.success){
        res.json(response)
    } else{
        res.json({
            msg: "user added"
        })
    }
})

app.listen(3000);