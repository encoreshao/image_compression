const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const app = express();
const upload = multer();

app.use(express.static('public'));

app.post('/compress', upload.single('image'), async (req, res) => {
    const compressionRatio = parseInt(req.body.compression, 10);
    const rotationAngle = parseInt(req.body.rotation, 10);
    const buffer = req.file.buffer;

    console.log(`Received image for compression with ratio: ${compressionRatio}`);

    try {
        const compressedBuffer = await sharp(buffer)
            .rotate(rotationAngle)
            .jpeg({ quality: compressionRatio })
            .toBuffer();

        console.log(`Image compressed successfully. Original size: ${buffer.length} bytes, Compressed size: ${compressedBuffer.length} bytes`);

        res.json({
            compressedImage: compressedBuffer.toString('base64'),
            compressedSize: compressedBuffer.length
        });
    } catch (error) {
        console.error('Error during image compression:', error);
        res.status(500).send('图片压缩失败');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});