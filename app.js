let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
        const button = e.currentTarget.classList;
        //console.log(button)
            if(button.contains("increase")){
                count++;
            } 
            else if(button.contains("decrease")){
                count--;
            }
            else {
                count = 0
            }

            if(count > 0) {
                value.style.color = "blue";
            }
            else if(count < 0) {
                value.style.color = "red";
            }
            else {
                value.style.color = "black";
            }

            value.textContent = count;
        });
    });

