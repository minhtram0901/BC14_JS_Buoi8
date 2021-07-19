document.getElementById("btnPushIntEl").addEventListener("click", pushIntEl);
document.getElementById("btnDelIntEl").addEventListener("click", delIntEl);
document.getElementById("btnExchangeValEl").addEventListener("click", exchangeValEl);
document.getElementById("btnSumPosEl").addEventListener("click", sumPosEl);
document.getElementById("btnCountPosEl").addEventListener("click", countPosEl);
document.getElementById("btnFindMinEl").addEventListener("click", findMinEl);
document.getElementById("btnFindMinPosEl").addEventListener("click", findMinPosEl);
document.getElementById("btnFindLastEvenEl").addEventListener("click", findLastEvenEl);
document.getElementById("btnAscSort").addEventListener("click", ascSort);
document.getElementById("btnFindFirstPrime").addEventListener("click", findFirstPrime);
document.getElementById("btnCompare").addEventListener("click", compare);
document.getElementById("btnPushFloatEl").addEventListener("click", pushFloatEl);
document.getElementById("btnDelFloatEl").addEventListener("click", delFloatEl);
document.getElementById("btnCountIntEls").addEventListener("click", countIntEls);

var intArr = [];
var floatArr = [];

function printArr(arr){
    var html = "Arr[] = ";
    for(var i =0; i<arr.length;i++){
        if (i===0){
            html += `[${arr[i]}`;
        } else {
            html += `
                , ${arr[i]}
            `;
        }
        if(i===arr.length-1){
            html+= `]`;
        }
    }
    return html;
}

function pushIntEl(){
    var elValue = +document.getElementById("inputIntArrEl").value;
    var divArr = document.getElementById("intArr");
    var html = "";
    if (!Number.isInteger(elValue) ){
        html= `Hãy nhập số nguyên!`;
        divArr.innerHTML = html;
        return;
    }    
    intArr.push(elValue);
    html = printArr(intArr);    
    if(intArr.length >= 2){
        document.getElementById("inputIdxEl1").disabled = false;
        document.getElementById("inputIdxEl2").disabled = false;
        document.getElementById("btnExchangeValEl").disabled = false;
        document.getElementById("btnSumPosEl").disabled = false;
        document.getElementById("btnCountPosEl").disabled = false;
        document.getElementById("btnFindMinEl").disabled = false;
        document.getElementById("btnFindMinPosEl").disabled = false;
        document.getElementById("btnFindLastEvenEl").disabled = false;
        document.getElementById("btnAscSort").disabled = false;
        document.getElementById("btnFindFirstPrime").disabled = false;
        document.getElementById("btnCompare").disabled = false;

        document.getElementById("inputIdxEl1").max = intArr.length - 1;
        document.getElementById("inputIdxEl2").max = intArr.length - 1;
    }
    
    divArr.innerHTML = html;
}

function delIntEl(){
    intArr.length = 0;
    document.getElementById("intArr").innerHTML = "";
    document.getElementById("intContent").innerHTML = "";
    document.getElementById("inputIdxEl1").disabled = true;
    document.getElementById("inputIdxEl2").disabled = true;
    document.getElementById("btnExchangeValEl").disabled = true;
    document.getElementById("btnSumPosEl").disabled = true;
    document.getElementById("btnCountPosEl").disabled = true;
    document.getElementById("btnFindMinEl").disabled = true;
    document.getElementById("btnFindMinPosEl").disabled = true;
    document.getElementById("btnFindLastEvenEl").disabled = true;
    document.getElementById("btnAscSort").disabled = true;
    document.getElementById("btnFindFirstPrime").disabled = true;
    document.getElementById("btnCompare").disabled = true;

    
    document.getElementById("inputIdxEl1").max = 0;
    document.getElementById("inputIdxEl2").max = 0;
    document.getElementById("inputIntArrEl").value = "";
    document.getElementById("inputIdxEl1").value = "";
    document.getElementById("inputIdxEl2").value = "";

}

function exchangeValEl(){
    var idx1 = +document.getElementById("inputIdxEl1").value;
    var idx2 = +document.getElementById("inputIdxEl2").value;
    var temp = intArr[idx1];
    intArr[idx1] = intArr[idx2];
    intArr[idx2] = temp;
    document.getElementById("intArr").innerHTML = printArr(intArr); 
}

function sumPosEl(){
    var sum = 0;
    var posElStr = "";
    for (var i= 0; i < intArr.length; i++){
        if(intArr[i]>0){
            sum += intArr[i];
            posElStr += `${intArr[i]} `;
        }
    }
    if(!posElStr){
        posElStr = "không có"
    }
    document.getElementById("intContent").innerHTML = 
    `Các phần tử dương trong mảng: ${posElStr}.
    Tổng của các phần tử dương trong mảng = ${sum}`;
}

// đếm số dương: n = 0; đếm số âm: n = -1
function countEl(arr, n){
    var count = 0;
    if(n === 0){
        for (var i= 0; i < arr.length; i++){
            if(arr[i]>0){
                count += 1;
            }
        }
        return count;
    } else if (n === -1){
        for (var i= 0; i < arr.length; i++){
            if(arr[i]<0){
                count += 1;
            }
        }
        return count;
    }
    return 0;
}

function countPosEl(){
    var count = countEl(intArr, 0);
    if(count === 0){
        document.getElementById("intContent").innerHTML = `Trong mảng không có phần tử là số dương.`;
    } else{
        document.getElementById("intContent").innerHTML = `Trong mảng có ${count} phần tử là số dương.`;
    }    
}

function findMinEl(){
    document.getElementById("intContent").innerHTML = 
    `Phần tử nhỏ nhất trong mảng là: ${Math.min.apply(null, intArr)}.`;
}

function findMinPosEl(){
    var min = 0;
    for(var i= 0; i<intArr.length; i++){
        if(intArr[i] > 0 && min === 0){
            min = intArr[i];
        }
        if(intArr[i] > 0 && intArr[i] < min){
            min = intArr[i];
        }
    }
    if (min === 0){
        document.getElementById("intContent").innerHTML = 
        `Trong mảng không có phần tử dương.`;
    } else{
        document.getElementById("intContent").innerHTML = 
        `Phần tử dương nhỏ nhất trong mảng là: ${min}.`;
    }    
}

function findLastEvenEl(){
    var evenEl = 1;
    for(var i= intArr.length - 1; i >=0 ; i--){
        if(intArr[i] % 2 === 0){
            evenEl = intArr[i];
            break;
        }
    }
    if (evenEl === 1){
        document.getElementById("intContent").innerHTML = 
        `Trong mảng không có phần tử là số chẵn.`;
    } else{
        document.getElementById("intContent").innerHTML = 
        `Số chẵn cuối cùng trong mảng là: ${evenEl}.`;
    }
}

function ascSort(){
    intArr.sort(function(a,b){
        return a - b;
    });
    document.getElementById("intArr").innerHTML = printArr(intArr); 
}

function isPrime(n){
    if(n < 2){
        return false;
    }
    var count = 0;
    for(var i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            count++;
        }
    }
    if(count === 0){
        return true;
    }else{
        return false;
    }
}

function findFirstPrime(){
    var foundFlag = 0;
   
    for(var i= 0; i < intArr.length ; i++){
        if(isPrime(intArr[i])){
            foundFlag = 1;
            break;
        }
    }
    if (foundFlag === 0){
        document.getElementById("intContent").innerHTML = 
        `Trong mảng không có số nguyên tố.`;
    } else{
        document.getElementById("intContent").innerHTML = 
        `Số nguyên tố đầu tiên trong mảng là: ${intArr[i]}.`;
    }
    
}

function compare(){
    var posEls = countEl(intArr, 0);
    var negEls = countEl(intArr,-1);
    if(posEls > negEls){
        document.getElementById("intContent").innerHTML = `Số phần tử dương (${posEls} số) nhiều hơn số phần tử âm (${negEls} số).`;
    } else if (posEls === negEls){
        document.getElementById("intContent").innerHTML = `Số phần tử dương bằng số phần tử âm (${negEls} số).`;
    } else{
        document.getElementById("intContent").innerHTML = `Số phần tử dương (${posEls} số) ít hơn số phần tử âm (${negEls} số).`;
    }
}

function pushFloatEl(){
    var elValue = +document.getElementById("inputFloatArrEl").value;
    var divArr = document.getElementById("floatArr");
    var html = ""; 
    floatArr.push(elValue);
    html = printArr(floatArr);    
    divArr.innerHTML = html;
}

function delFloatEl(){
    floatArr.length = 0;    
    document.getElementById("inputFloatArrEl").value = "";
    document.getElementById("floatArr").innerHTML = "";
    document.getElementById("floatContent").innerHTML = "";
}

function countPrime(arr){
    var cnt = 0;
    for(var i = 0 ; i < arr.length; i++){
        if (Number.isInteger(arr[i]) ){
            cnt ++;
        }  
    }
    return cnt;
}

function countIntEls(){
    var cnt = countPrime(floatArr);
    document.getElementById("floatContent").innerHTML = `Trong mảng có ${cnt} số nguyên.`;
}
