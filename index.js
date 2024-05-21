const form = document.getElementById('form');
console.log(form);

function bmi_calc(e) {
    e.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const hightInMeters = height / 100;
    const totalBMI = weight / (hightInMeters**2)


    console.log(hightInMeters);
    console.log(totalBMI.toFixed(2));
    
    if(totalBMI < 18.5){
        alert(`Your BMI is ${totalBMI.toFixed(2) 

        } and you are underweight`);
        
        else if (totalBMI >= 18.5 && totalBMI <= 24.9){
            alert(`Your BMI is ${totalBMI.toFixed(2)} and you are normal weight`);
        }
        else if (totalBMI >= 25 && totalBMI <= 29.9){
            alert(`Your BMI is ${totalBMI.toFixed(2)} and you are overweight`);
        }
        else if (totalBMI >= 30){
            alert(`Your BMI is ${totalBMI.toFixed(2)} and you are obese`);

            else if (totalBMI >= 30 && totalBMI <= 34.9){
                alert('Your BMI is ${totalBMI.tofixed(2)} Morbidly obese');
    
        }

    
}
    console.log(totalBMI.toFixed(2));

    }
 
