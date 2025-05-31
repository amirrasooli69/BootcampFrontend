const getImageButton = document.getElementById("getImage");
const showImage = document.getElementById("showImage");

const getImageHandler = async () =>{

    const res = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await res.json()
     console.log(data);
     showImage.src = data.message;

}
getImageButton.addEventListener("click", getImageHandler)