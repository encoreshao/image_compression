document.getElementById('compress').addEventListener('click', async () => {
    const fileInput = document.getElementById('upload');
    const compressionRatio = document.getElementById('compression').value;
    const rotationAngle = document.getElementById('rotation').value;
    if (fileInput.files.length === 0) {
        alert('请上传图片');
        return;
    }

    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image', file);
    formData.append('compression', compressionRatio);
    formData.append('rotation', rotationAngle);

    const response = await fetch('/compress', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    document.getElementById('originalImage').src = URL.createObjectURL(file);
    document.getElementById('originalSize').textContent = `原始大小: ${file.size / 1024} KB`;
    document.getElementById('compressedImage').src = `data:image/jpeg;base64,${result.compressedImage}`;
    document.getElementById('compressedSize').textContent = `压缩后大小: ${result.compressedSize / 1024} KB`;
    document.getElementById('download').href = `data:image/jpeg;base64,${result.compressedImage}`;
});