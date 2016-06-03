<script>
            function delBoxes(){
                    var boxes = document.getElementsByClassName('chk');

                    for(var i = 0; i<boxes.length; i++){
                      box = boxes[i];
                      if(box.checked){
                          box.parentNode.removeChild(box);
                      }
                  }
              }
          </script>