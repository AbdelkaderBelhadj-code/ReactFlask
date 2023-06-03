from flask import Flask, request, send_file
import os

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'

@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return 'No file found'
    file = request.files['file']
    if file.filename == '':
        return 'No file selected'
    
    filename = file.filename
    file.save(os.path.join(UPLOAD_FOLDER, filename))
    return filename

@app.route('/images')
def get_images():
    files = os.listdir(UPLOAD_FOLDER)
    return {'images': files}

@app.route('/images/<filename>')
def get_image(filename):
    return send_file(os.path.join(UPLOAD_FOLDER, filename))

if __name__ == '__main__':
    app.run(debug=True)