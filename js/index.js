var a = prompt("Enter the size of array: ");
var arr = [];
for(var i = 0;i< a;i++){
    arr[i] = prompt(i+1);
}
arr.sort(function(m, n){return m- n});
var x = Math.floor( a/2 );
alert(arr[x])

str = "";
if(a == 3){
    str += arr[0]+" "+arr[1]+" "+arr[2];
}

else if(a % 2 == 0){
    var i = 0;
    for (var j=x; j<a; j++){
        str += arr[i]+" "+arr[j]+" ";
        i++;
    }
}
else{
    var j = x;
    var i=0
    for (i; i<x-1; i++){
        str += arr[i]+" "+arr[j]+" ";
        j++;
    }
    str += arr[i]+" "+arr[a-1]+" "+arr[j];
}

alert(str);