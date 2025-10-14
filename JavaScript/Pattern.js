// Pattern
let pattern = '';
let n = 5;
for(let i = 0; i<n; i++){
    for(let j = n - i - 1; j >= 0; j--){
        pattern+='*';
    }
    pattern+='\n';
}
console.log(pattern);


let numPattern = '';
let m = 4;
let count = 1;
for(let i = 0; i< m; i++){
    for(let j = 0; j<=i ; j++){
        numPattern += `${count} `;
        count++;
    }
    numPattern+='\n';
}
console.log(numPattern);

let boxPattern = '';
for(let i = 0; i < n; i++){
    for(let j = 0; j< n; j++){
        if(i == 0 || i == n-1 || j == 0|| j == n-1 ){
            boxPattern+='* ';
        }
        else {
            boxPattern+='  ';
        }
    }
        boxPattern+='\n';
}
console.log(boxPattern);
