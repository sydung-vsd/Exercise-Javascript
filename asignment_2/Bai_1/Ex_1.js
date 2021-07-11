var arr = [0, 5, 55, 15, 20, 25, 30, 35, 200, 999];

var displayArr = function(){
    var str = '';
    for(var i=0; i <= arr.length - 1; i++){
        str += arr[i] + ' ';
    }
    alert(str);
}

var search = function(){
    var num = parseInt(prompt("Nhập số cần tìm:"));
    if(isNaN(num) || num < 0){
        alert("Nhập lại");
    }
    else{
        var findIndex = arr.indexOf(num);
        if(findIndex == -1){
            alert(num + " không có trong mảng");
        }
        else{
            alert("Số " + num + " trong mảng có vị trí là: " + (parseInt(findIndex) + 1));
        }
    }
}

var findMax = function(i){
    var max = 0;
    for(var i in arr){
        if(i > max){
            max = i;
        }
    }
    alert("Giá trị lơn nhất của mảng là: " + max);

    // var max = -Infinity;
    // arr.map(function(i){
    //     if(max <i){
    //         max = i;
    //     }
    // });
    // alert("Giá trị lơn nhất của mảng là: " + max);
}

var sum = function () {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    alert("Tổng tất cả các phần tử trong mảng là: " + sum);
  };
  
  var sortArrayByDescending = function () {
    var comparison = function (x, y) {
      return y - x;
    };
    alert(
      "Mảng trước khi sắp xếp:\n" +
        numbers.join(" ") +
        "\n\n" +
        "Mảng sau khi sắp xếp giảm dần:\n" +
        numbers.sort(comparison).join(" "),
    );
  };
  
  var showMenu = function () {
    do {
      var menu = "1. In mảng\n";
      menu += "2. Tìm kiếm vị trí một phần tử trong mảng\n";
      menu += "3. Tìm kiếm phần tử lớn nhất trong mảng\n";
      menu += "4. Tổng tất cả các phần tử\n";
      menu += "5. Sắp xếp các phần tử theo chiều giảm dần\n";
      menu += "6. Thoát\n\n";
  
      var item = parseInt(prompt(menu + "Chọn một mục", 1));
      if (isNaN(item) || item < 1 || item > 6) {
        alert("Xin nhập lại giá trị hợp lệ (1->6)");
      } else {
        switch (item) {
          case 1: {
            displayArr();
            break;
          }
          case 2: {
            search();
            break;
          }
          case 3: {
            findMax();
            break;
          }
          case 4: {
            sum();
            break;
          }
          case 5: {
            sortArrayByDescending();
            break;
          }
        }
      }
    } while (item !== 6);
  };
  
  window.onload = function () {
    showMenu();
  };