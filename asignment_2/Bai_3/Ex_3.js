var array = [];
var count = 0;

var initializeArray = function () {
  do {
    var name = prompt("Enter a name (Press esc to exit): ");
    if (name != null) {
      array[count++] = name;
    }
  } while (name != null);
};

var printArray = function () {
  alert(array.join(" "));
};

var sortArrayByAscending = function () {
  alert(
    "Array before sort:\n" + array.join(" ") + "\n\n" + "Array after sort by ascending:\n" + array.sort().join(" "),
  );
};

var showMenu = function () {
  do {
    var menu = "1. Enter array names\n";
    menu += "2. Sort array of name by ascending\n";
    menu += "3. Print array\n";
    menu += "4. Exit\n\n";

    var item = parseInt(prompt(menu + "Select menu item:", 1));
    if (isNaN(item) || item < 1 || item > 4) {
      alert("Please select valid menu item");
    } else {
      switch (item) {
        case 1: {
          initializeArray();
          break;
        }
        case 2: {
          sortArrayByAscending();
          break;
        }
        case 3: {
          printArray();
          break;
        }
      }
    }
  } while (item !== 4);
};

window.onload = function () {
  showMenu();
};
