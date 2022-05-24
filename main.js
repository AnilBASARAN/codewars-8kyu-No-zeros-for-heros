function noBoringZeros(n) {
    n = n.toString().split("").reverse()
    for(let i = 0 ; i < n.length; i ++){
      if(n[i]=="0"){
        delete n[i]
      }else{
        break
      }
    }
    return Number(n.reverse().join(""))
  }

  /*


  8kyu-No zeros for heros

  Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript


BEST SOLUTİONS
-*------------------------------------------------------------------------------

function noBoringZeros(n) {
  while(n%10==0 && n!=0){n/=10;}
  return n;
}

-*------------------------------------------------------------------------------
function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}

-*------------------------------------------------------------------------------

const noBoringZeros = n => parseInt(n.toString().replace(/0+$/g, "") + 0) / 10;
