
let foodArr = ['In n Out','Tucanos Brazillian Grill','Outback Steakhouse','Asa Ramen','Chic fil-a','Bam Bams BBQ','Black Bear Diner',
"Joe's Cafe",'Texas Roadhouse',"Molly's",'Waffle Love','Five Guys']


function randomBtn(e){
    e.preventDefault()
    Math.floor(Math.random()*foodArr.lenght)
    console.log(foodArr)
}

let randomButton = document.querySelector("random-button")
randomButton.addEventListener('click', randomBtn)