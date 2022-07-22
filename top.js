images=[
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/deal-of-the-day-new_1400x.png?v=1657957011",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/gif--new_1400x.gif?v=1658249062",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A-131-Banner_0e6d2056-3bd5-4ee0-8bd3-7a2a50e30e30_1400x.jpg?v=1657953240","https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wireless-banner_1_1400x.png?v=1657290971",
    "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/A131-banner-new_1_1400x.png?v=1658248789"
    ]
     let crauser = document.getElementById("crauser");
let imagestate =0
    let left = document.querySelector("#left").addEventListener("click",function(){
        imagestate++
         if(imagestate===images.length){
            imagestate=0
         }
        crauser.src=images[imagestate]
    });
    let right = document.querySelector("#right").addEventListener("click",function(){
        imagestate--
        if(imagestate<0){
            imagestate=images.length-1
         }
        crauser.src=images[imagestate]
    });