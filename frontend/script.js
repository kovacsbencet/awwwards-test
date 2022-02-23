function loadEvent(){

    let loaderElement = document.getElementById("loader")

    function loadingScreen(){
        loaderElement.insertAdjacentHTML("beforeend", `
        <section class="animSection">
            <h2 class="revolver"> 
                <span>RevØlver</span> 
                <span class="words"> </span>
            </h2>
        </section>`)
    console.log("loaded")
    }
    loadingScreen()
    
    if (typeof loadingScreen === "function"){

        let loader = document.querySelector("#loader")

        function vanish(){
            loader.classList.add("disappear")
        }
        vanish()
        console.log("Preloader has vanished.")
        setTimeout(function(){vanish();}, 10000);
    }

    if (typeof vanish === "function"){
        
        let rootElement = document.getElementById("root")

        function insertMain(){
            rootElement.insertAdjacentHTML("beforeend",`
            <section class="main-page">
                <div class="header">
                    <div class="rightside">
                        <ul>
                            <li>RevØlver</li>
                            <li>Menu</li>
                        </ul>
                    </div>
                    <div class="contact">
                        <p>Contact</p>
                    </div>
                    </div>
                    <div class="img">
                    <img src="logo.png">
                    </div>
                    <div class ="nav">
                    <div class="leftlist">
                        <ul>
                            <li>Creativity</li>
                            <li>Design</li>
                            <li>Film</li>
                            <li class="work">Work</li>
                            <li>Art Direction</li>
                            <li>Digital</li>
                            <li>Photography</li>
                        </ul>
                    </div>
                </div>
            </section>`)
        }
        insertMain()
        console.log("The main content is inserted.")
        setTimeout(function(){insertMain();}, 10000);
    }
}
window.addEventListener("load", loadEvent)