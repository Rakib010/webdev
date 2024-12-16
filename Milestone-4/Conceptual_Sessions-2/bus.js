/*  borjatri = 
 bus = 50, ekta bus e 50 jon er besi jawa jabe na 
 micro = 15, ekta micro te 15 jon er besi jawa jabe na 
 rickshaw cost 20 taka , bus & micro te jaya jei manush gula baki thakbe tara rickshaw die jete hobe 
  
*/

function countVara(manush) {
    const bus = 50;
    const micro = 15;
    const rickshawCost = 20;
  
    const remainAfterBus = manush % bus;
    const remainAfterMicro = remainAfterBus % micro ;
    const remainAfterRickshaw = rickshawCost * remainAfterMicro;
    return remainAfterRickshaw;
  }
  const taka = countVara(234);
  console.log(taka);
  