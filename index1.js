//selecting all elements
const filteritem = document.querySelector(".items");
const filterimg = document.querySelectorAll(".image");

window.onload = () =>{//once window loaded
    filteritem.onclick = (selecteditem) =>{//when user clicked on filteritem div
        if(selecteditem.target.classList.contains("item")){//if user click element has .item class
        filteritem.querySelector(".active").classList.remove("active");//remove active class which is in the first element.
        selecteditem.target.classList.add("active");//active the active class on the user selected element or item
        let filtername = selecteditem.target.getAttribute("data-name");//getting name data of user selected item and storing in a filtername variable
        filterimg.forEach((image) =>{
            let filterimages = image.getAttribute("data-name");
            // f user selected  item data-name value is equal to image data-name value
            //or user selected item data-name value is equal to "all"  
            if((filterimages == filtername) || filtername == "all"){
                image.classList.remove("hide")
                image.classList.add("show");
            }else{
                image.classList.add("hide");
                image.classList.remove("show");
            }
        });
        }
        
        for( let index = 0; index<filterimg.length; index++){
            filterimg[index].setAttribute("onclick", "preview(this)");//adding onclick attributes for all images
        }
    }

}
// selecting items required
const previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
categoryname = previewBox.querySelector(".title p"),
closeIcon = previewBox.querySelector(".fa-xmark");
//fullscrean preview function
function preview(element){
    let selectedprevimg = element.querySelector("img").src;
    let selectedimgcategory = element.getAttribute("data-name");
    categoryname.textContent =  selectedimgcategory;
    previewImg.src = selectedprevimg;
    previewBox.classList.add("show")//show the preview box
    closeIcon.onclick = ()=>{
         previewBox.classList.remove("show")
    }

}