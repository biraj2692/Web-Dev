
function task1(){
    let n = prompt("Enter the number : ");
    let str = '';

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n; j++) {
            if (j === i || j === n - i + 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        str += row + '\n';
    }

    window.alert(str);

}

function task2() {
    let n = prompt("Enter the number : ");
    let str = '';

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 || j == n) {
                str += '*';
            } 
            else {
                str += ' ';
            }
        }
        str += '\n';
    }
    window.alert(str);
    console.log(str);

}

function task3(){
    
    let n = prompt("Enter the number : ");
    let str = '';
    
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        str += row + '\n';
    }
    
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= n - i; j++) {
            row += ' ';
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1) {
                row += '*';
            } else {
                row += ' ';
            }
        }
        str += row + '\n';
    }
    
    window.alert(str);
}

function task4(){
    
    let n = prompt("Enter the number : ");
    let str = '';
    
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        str += row + '\n';
    }
    
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        str += row + '\n';
    }
    
    window.alert(str);
}

function task5(){
    
    let n = prompt("Enter the number : ");
    let str = '';

    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= 2 * n - 1; j++) {
            if (j >= i && j <= 2 * n - i) {
                row += j;
            } else {
                row += ' ';
            }
        }
        str += row + '\n';
    }
    
    for (let i = n - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= 2 * n - 1; j++) {
            if (j >= i && j <= 2 * n - i) {
                row += j    ;
            } else {
                row += ' ';
            }
        }
        str += row + '\n';
    }
    
    window.alert(str);
    console.log(str);
}
