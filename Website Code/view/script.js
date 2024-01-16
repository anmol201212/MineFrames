document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // Replace the following URL with the actual URL of your cloud storage
    const cloudStorageUrl = "https://your-cloud-storage-url.com/your-folder/";

    // Replace 'n' with the number of photos you have
    const numberOfPhotos = 10;

    for (let i = 1; i <= numberOfPhotos; i++) {
        const img = document.createElement("img");
        img.src = `${cloudStorageUrl}photo${i}.jpg`;
        img.alt = `Photo ${i}`;
        gallery.appendChild(img);
    }
});
