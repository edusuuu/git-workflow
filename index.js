let express = require("express") 
let app = express()

let PORT = 6969

app.use(express.static(`${__dirname}/public`))
app.get("/signin", (_, res) => res.sendFile(`${__dirname}/public/signin.html`))

app.listen(PORT, (_) => console.log(`Server is running on port ${PORT}`)) 
