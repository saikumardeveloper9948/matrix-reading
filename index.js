// DATE: 02/09/2024

// Practice Work:

// 1)WAP to print  the sum of outer layers in the matrix

// 2 3 4
// 3 4 2
// 3 4 1


// 2+3+4+3+3+4+1+2 = ? (sum)






rows = +prompt("enter a number");
cols = +prompt("enter a number");
m1 = []; sum = 0;
for(i=1; i<=rows; i++){
    x = [];
    for(j=1; j<=cols; j++){
        console.log("enter " + i + " " + j + " element");
        ele = +prompt();
        x.push(ele);
    }
    m1.push(x);
}
for(i=0; i<m1.length; i++){
    res = "";
    for(j=0; j<m1[i].length; j++){
        if(i==0 || i==m1.length-1 || j==0 || j==m1[i].length-1){
            sum = sum + m1[i][j];
            res = res + m1[i][j] + " ";
        } else {
            res = res + " ";
        }
    }
    console.log(res);
}
console.log("Sum of boundary elements: " + sum); 




// 2) WAP to print the sum of diagonal elements in the matrix

// output: 2+4+1+4+4 (sum)




rows = +prompt("enter a number");
cols = +prompt("enter a number");
m1 = []; sum = 0;
for(i=1; i<=rows; i++){
    x = [];
    for(j=1; j<=cols; j++){
        console.log("enter " + i + " " + j + " element");
        ele = +prompt();
        x.push(ele);
    }
    m1.push(x);
}
for(i=0; i<m1.length; i++){
    res = "";
    for(j=0; j<m1[i].length; j++){
        if(i==j || i+j==rows-1){
            sum = sum + m1[i][j];
            res = res + m1[i][j] + " ";
        } else {
            res = res + " ";
        }
    }
    console.log(res);
}
console.log("Sum of diagonal elements: " + sum); 