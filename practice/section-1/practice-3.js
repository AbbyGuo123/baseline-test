'use strict';

function collectSameElements(collectionA, objectB) {
  var k=0,flag=0;
  var c = new Array();

  for(var i=0;i<collectionA.length;i++){
     if(collectionB.indexOf(collectionA[i])!=-1){
       c.push(collectionA[i]);
       k++;
     }
   }
   return c;

}
