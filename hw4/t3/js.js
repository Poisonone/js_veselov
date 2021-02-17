var students = [
    {age: 21,groupname: 'a'},
    {age: 64,groupname: 'b'},
    {age: 12,groupname: 'c'},
    {age: 17,groupname: 'b'},
    {age: 20,groupname: 'b'},
    {age: 25,groupname: 'c'},
    {age: 27,groupname: 'a'},
    {age: 20,groupname: 'a'},
    {age: 21,groupname: 'c'},
    {age: 27,groupname: 'a'},
    {age: 56,groupname: 'c'}
]
for(i=0;i<students.length;i++){
 
}
var result = students[age].reduce(function(sum,current){
    return sum+current;
},0);
