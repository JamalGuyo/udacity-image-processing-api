import express from 'express'
import routes from './routes/index'

const app = express()
const port = 3000
app.use(express.static('public'))
app.use(express.static('assets'))

app.use('/api', routes)

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Image Processing API project</h1>')
})

app.listen(port, () => console.log(`Server listening on port ${port}...`))

export default app
