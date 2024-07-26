function generate(){
    let dice_number = document.getElementById('dice_number').value;
    if (dice_number<1){
        window.alert("Please Enter a positive number!")
    }
    else{
        let dice_random_nums = [];
    for(let i=0;i<dice_number;i++){
        let dice = Math.ceil(Math.random()*6);
        dice_random_nums.push(dice);
    }
    let dice_html="";
    for(let i =0;i<dice_random_nums.length;i++){
        dice_html+=`<img src="images/${dice_random_nums[i]}.png" alt="" srcset="">`
    }
    let dice_side = document.getElementById('dice_side');
    dice_side.innerHTML = dice_html;
    }
    
}