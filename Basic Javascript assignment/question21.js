//21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

const Countries= ["inida", "Africa", "China", "Pakistan"];

if(Countries.includes('Ethiopia' )){
    console.log('Ethiopia' );
}
else{
    Countries.push('Ethiopia' );
    console.log( `Ethiopia added to the list succefully , new list is ${Countries}`);
}