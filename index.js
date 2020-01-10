const express = require('express');
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('pages/index'))
http.listen(PORT, () => console.log(`Listening on ${ PORT }`))

io.on('connection', function(socket) {
  socket.on('csv', (data) => {
    //needs to send data to database here
    console.log(data)
  })
})
