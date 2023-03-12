import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Image Processing API project</h1>')
})

app.listen(port, () => console.log(`Server listening on port ${port}...`))
