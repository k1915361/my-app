const express = require('express');
const app = express();
const http = require('http').createServer(app);
const compressImages = require('compress-images');
const formidable = require('express-formidable');
app.use(formidable());

const fileSystem = require('fs');
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

http.listen(port, function () {
    console.log(`Server is running on port ${port}`)

    app.get('/compressImage', function (req, res) {
        const image = req.files.image;
        if (!image.size > 0) {
            res.send('please select an image.')
        }

        if (!(image.type === 'image/png' || image.type === 'image/jpeg')) {
            res.send('Please select an image.')
        }

        readFile(image.path, function (err, data) {
            if (err) throw err;

            const filePath = 'uploads/' + (new Date().getTime(
            )) + '-' + image.name;
            const compressedFilePath = 'uploads/' + image.name;
            const compression = 60;

            writeFile(filePath, data, async function (err) {
                if (err) throw err;

                compressImages(filePath, compressedFilePath, {
                    compress_force: false, statistic: true
                    , autoupdate: true
                }, false,
                    {
                        jpg: {
                            engine: 'mozjpeg',
                            command: ['-quality', compression, compression]
                        }
                    },
                    {
                        png: {
                            engine: 'pngquant',
                            command: ['--quality='
                                + compression
                                + '-'
                                + compression, '-o'
                            ]
                        }
                    },
                    {
                        svg: {
                            engine: 'svgo', command: '--multipass'
                        }
                    },
                    {
                        gif: {
                            engine: 'gifsicle',
                            command: ['--colors', "64", '--use-col=web']
                        }
                    },
                    async function (error, completed, statistic) {
                        console.log('-------------');
                        console.log(error);
                        console.log(completed);
                        console.log(statistic);
                        console.log('-------------');

                        unlink(filePath, function (err) {
                            if (err) throw error;
                        })
                    })
                res.send('File has been compressed and saved.')
            })
            unlink(filePath, function (err) {
                if (err) throw err;
            })
        })

    })

    app.get('/', function (req, res) {
        res.render('src/server/views/index');
    })
})