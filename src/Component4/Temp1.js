import React, { useEffect, useState } from 'react'

function Temp1() {

     const download =()=>{
          function forceDownload(imageSrc, image){
               var xhr = new XMLHttpRequest();
               xhr.open("GET", imageSrc, true);
               xhr.responseType = "blob";
               xhr.onload = function(){
                   var urlCreator = window.URL || window.webkitURL;
                   var imageUrl = urlCreator.createObjectURL(this.response);
                   var tag = document.createElement('a');
                   tag.href = imageSrc;
                   tag.download = image;
                   document.body.appendChild(tag);
                   tag.click();
                   document.body.removeChild(tag);
               }
               xhr.send();
           }
     }
    return (
    <div className='bg-success' style={{height:"100vh"}}>
         <h1>Main</h1>
         <button onClick={download}>Download</button>
    </div>
  )
}

export default Temp1
 