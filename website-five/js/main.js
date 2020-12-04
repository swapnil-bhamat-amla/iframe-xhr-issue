(function ($) {
  var callXHR = function () {
    $.ajax({
      type: 'get',
      url: 'http://localhost:9000/components.json',
      async: false,
      data: { a: "bc", d: "e,f" },
      dataType: "json",
      success: function (response) {
        console.info('This should in the XHR success', response);
      },
      error: function (xhr, ajaxOptions, thrownError) {
        console.log(thrownError, xhr, ajaxOptions);
      }
    });
  }

  $(document).ready(function () {
    console.info('This should be before XHR');
    callXHR();
    console.info('This should be after XHR');
  });

})($)