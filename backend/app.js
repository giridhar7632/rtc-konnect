const express = require('express')
const cookieParser = require('cookie-parser')

// const indexRouter = require("./routes/index");

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// app.use("/", indexRouter);

app.listen(PORT, function () {
	console.log(`🚀 Listening on port ${PORT}`)
})
