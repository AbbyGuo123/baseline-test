'use strict';

function collectSameElements(collectionA, collectionB) {
var k=0,flag=0;
  var c = new Array();
  for(var i=0;i<collectionA.length;i++){
  for(var j=0;j<collectionB.length;j++){
  if(collectionB[j].indexOf(collectionA[i])!=-1){
        c.push(collectionA[i]);
        k++;
      }
  }
  }
  return c;
}
