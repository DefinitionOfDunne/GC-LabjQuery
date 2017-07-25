$(document).ready(function() {
      var totalO= 0;
    $('#add-button').click(function() {
      var arr = [];
      var item = $('#input-items').val()
      var price = $('#input-price').val()
      var grocOb = { item: item, price: price };
      var price = $('#input-price').val()
      var totalOutput = document.getElementById('total');
      arr.push(grocOb);
      for (var i = 0; i < arr.length; i++) {
        totalO += Number(arr[i].price);
    }
      total.innerHTML = 'Total Cost is $' + totalO;
      $('.active-items').prepend('<li class="in-cart">' + $('#input-items').val() + " $" + $('#input-price').val() + '</li>');
    });
    $('.active-items').on('click', 'li', function() {
        $(this).removeClass("active-items");
        $(this).addClass("bought");
    });
    $('#clear-button').click(function() {
        $('.active-items').empty();
        $('.bought').empty();
        $("#total").empty();
        totalO = 0;
    });
});



