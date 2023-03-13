import express from 'express';
import { promises as fsPromises } from 'fs';
import sharp from 'sharp';
const images = express.Router();

images.get('/', async (req, res) => {
    const { filename, height, width } = req.query;
    if (!filename || !height || !width) {
        return res.send('<h1>Url pattern should be this format => /api/images?filename=image.jpg&width=200&height=300</h1>')
    }
    // new thumb image
    const inputPath = `assets/full/${filename}`;
    const inputFile = await fsPromises.readFile(inputPath)

    // handle image transformation here
    sharp(inputFile)
        .resize(100, 200, {
            fit: sharp.fit.cover,
            position: sharp.strategy.entropy
        })
        .toBuffer()
        .then(async (data) => {
            try {
                await fsPromises.writeFile(`assets/thumb/${filename}`, data);
                return res.send(`<div 
                style="height:100%; width:100%;background-color:rgba(0,0,0,0.1);
                 display:flex; justify-content:center; align-items: center;">
                 <img style="max-width=100%" src="/thumb/${filename}" width=${width} height=${height}
                 </div>`)
            }
            catch (err) {
                console.log(err)
            }
        })
        .catch(err => res.send(err))
})

export default images;