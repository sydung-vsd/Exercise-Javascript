var array, n, m;

var declareArray = function () {
  n = parseInt(prompt("Enter n(rows):"));
  m = parseInt(prompt("Enter m(columns):"));
  if (isNaN(n) || isNaN(m) || n < 0 || m < 0) {
    alert("Please enter valid rows and columns");
  } else {
    array = new Array(n);
    for (var i = 0; i < n; i++) {
      array[i] = new Array(m);
    }
  }
};

var initializeArray = function () {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      array[i][j] = parseInt(prompt("Enter value for array[" + i + "][" + j + "]: "));
    }
  }
};

var printArray = function () {
  var arrString = "";
  for (var i = 0; i < n; i++) {
    arrString += array[i].join(" ");
    arrString += "\n";
  }
  alert(arrString);
};

var sum = function () {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    // using reduce function to calculate sum of each array[i] (array in row)
    sum += array[i].reduce(function (preValue, currentValue) {
      return preValue + currentValue;
    });
  }

  alert("Sum of all elements in array: " + sum);
};

var search = function () {
  var num = parseInt(prompt("Enter number to search:"));
  if (isNaN(num) || num < 0) {
    alert("Please enter integer number");
  } else {
    var isFound = false;
    for (var i = 0; i < n; i++) {
      var numIndex = array[i].indexOf(num);
      if (numIndex !== -1) {
        alert("Number " + num + " is exist in array");
        isFound = true;
        break;
      }
    }
  }
  if (!isFound) {
    alert("Number " + num + " is NOT in array");
  }
};

var sortArrayByAscending = function () {
  var comparison = function (x, y) {
    return x - y;
  };
  var arrBefore = "";
  for (var i = 0; i < n; i++) {
    arrBefore += array[i].join(" ");
    arrBefore += "\n";
  }

  var arrAfterSort = "";
  for (var i = 0; i < n; i++) {
    arrAfterSort += array[i].sort(comparison).join(" ");
    arrAfterSort += "\n";
  }

  alert("Array before sort:\n" + arrBefore + "\n\n" + "Array after sort by ascending:\n" + arrAfterSort);
};

var showMenu = function () {
  do {
    var menu = "1. Declare 2 dimentions array with n rows and m columns\n";
    menu += "2. Initialize value for array\n";
    menu += "3. Print array\n";
    menu += "4. Sum of all elements in array\n";
    menu += "5. Search a member\n";
    menu += "6. Sort all elements of array by ascending\n";
    menu += "7. Exit\n\n";

    var item = parseInt(prompt(menu + "Select menu item:", 1));
    if (isNaN(item) || item < 1 || item > 7) {
      alert("Please enter valid menu item");
    } else {
      switch (item) {
        case 1: {
          declareArray();
          break;
        }
        case 2: {
          initializeArray();
          break;
        }
        case 3: {
          printArray();
          break;
        }
        case 4: {
          sum();
          break;
        }
        case 5: {
          search();
          break;
        }
        case 6: {
          sortArrayByAscending();
          break;
        }
      }
    }
  } while (item !== 7);
};

window.onload = function () {
  showMenu();
};
