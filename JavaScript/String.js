// String methods

const str = "JavaScript";

console.log(str.charAt(1));
console.log(str.substring(1,3)); // returns new String
console.log(str.slice(1,3)); 


console.log(str.substring(-3, 4)); // "Java"   (negative treated as 0)
console.log(str.slice(-3, 4));     // ""       (since -3 means "3 from end")

console.log(str.replace('Java', 'Type'));   
console.log(str);   

s = str.split('');
console.log(s.sort((a,b)=>a.localeCompare(b)));

console.log(str.search('Script'));   
console.log(str.match(/ava/g));   
