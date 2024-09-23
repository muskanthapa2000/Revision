const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.post('/upload-images', upload.array('images', 5), async (req, res) => {
    const imageFiles = req.files;
  
    if (!imageFiles) {
      return res.status(400).send('No images uploaded');
    }
    
    const imagePromises = 
  })