function Size(){

    var item = document.getElementById("size");

    item.onclick = function() {

          if (item.style.fontSize === "16px") {
            item.style.fontSize="20px";
            console.log('font-size set to 20px')
            alert('heeelo')

          } else {
            item.style.fontSize="16px"
            console.log('font-size set to 16px')
          }

        } 

    }
     
 Size()