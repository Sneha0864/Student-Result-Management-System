const data = [
    {
        name: "SNEHA T",
        regno: "412208100001",
        NUMBER_THEORY:"A",
        SOFTWARE_ENGINEERING:"A+",
        COMPUTER_NETWORKS: "O",
        DATA_STRUCTURES: "B"
    },
    {
        name: "SIMRAN T",
        regno: "412208100002",
        NUMBER_THEORY:"A+",
        SOFTWARE_ENGINEERING:"A+",
        COMPUTER_NETWORKS: "A+",
        DATA_STRUCTURES: "A+"
    },
    {
        name: "SHRADDHA R",
        regno: "412208100003",
        NUMBER_THEORY:"O",
        SOFTWARE_ENGINEERING:"A+",
        COMPUTER_NETWORKS: "B+",
        DATA_STRUCTURES: "B"


    }
]


const results = document.getElementById('res')


const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "NUMBER_THEORY : " + data[i].NUMBER_THEORY +"</h3>" + "<h3>" + "SOFTWARE_ENGINEERING : " 
            + data[i].SOFTWARE_ENGINEERING +"</h3>" +"<h3>" + "COMPUTER_NETWORKS : " + data[i].COMPUTER_NETWORKS +"</h3>"+
            "DATA_STRUCTURES : " +data[i].DATA_STRUCTURES + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h1>" + "Not available" + "</h1>" 


})

