// (()=>{ // works with script at bottom

//     let targetNode = document.getElementById("target");

//     targetNode.innerHTML = "Hello, from the <em>JS</em> file";

// })();

// browser DOM load event tied to anon callback works with script at top.
window.onload = () => {
    
    const modifyDiv = () => {
        // step #2 : retrieving DOM Node to modify
        // let targetNode = document.querySelector("#target");
        // retrieving all DIV Nodes
        let targetNodes = document.querySelectorAll(".target")
        // step #3: modifying the Node's content
        for(let i = 0; i < targetNodes.length; i++){
            targetNodes[i].innerHTML= "Hello, from the <em>JS</em> file"
            targetNodes[i].style.backgroundColor = "red";
            targetNodes[i].classList.add("test");
            targetNodes[i].style.marginBottom = "25px";
        };
        // step #3: modifying the Node's style
        //targetNode.style.backgroundColor = "red";
        // step #3: add a class name to Node
        //targetNode.classList.add("test");
    }

    // EVENT LISTENERS
    // step #1: Set an event listener on the HTML DOM event we want to trigger on
    document.querySelector("#trigger").addEventListener("click",
    modifyDiv)
};