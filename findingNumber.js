function findX() {
    let numbers = [-3, 5, 1, 3, 2, 10, -3, 5];
    let xFind = +prompt("Nhap phan tu x can tim trong mang: ");
    let found = false;
    for (let i = 0; i < numbers.length; i++) {
        if (xFind === numbers[i]) {
            document.write("Vi tri cua " + xFind + "la so" + i + "<br/>");
            found = true;
        }
    }
    if (!found) {
        document.write("Khong tim thay phan tu " + xFind + " trong mang")
    }
}

//bai Tim max trong mang
function findMax(){
    let numbers = [-3, 5, 1, 3, 2, 10];
    let numMax = numbers[0];
    let index = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numMax< numbers[i]){
            numMax = numbers[i];
            index = i;
        }

    }
    document.write("max:  "+numMax+"o vi tri thu: "+ index);
}