// create function SimpleAddingNum

function SimpleAddingNum(num) { 
    // jika yg diinputkan 0, maka tampilkan 0
    if (num === 0) {
        return num;
    } 
    return num + SimpleAddingNum(num - 1);
  }
//SimpleAddingNum(12);
// = 78