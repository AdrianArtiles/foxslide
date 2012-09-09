$(function(){
  $('[rel="tooltip"]').tooltip();

  if ( window.location.pathname == '/' ) {
    $('[rel="tooltip"]').hover(
      function () {
        $('.tooltip.top').addClass("home");
      }
    );
  }

  $(".tweet").tweet({
    username: 'adrianartiles',
    join_text: "auto",
    avatar_size: 32,
    count: 3,
    loading_text: "loading tweets...",
    auto_join_text_default: "",
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "loading tweets..."
  });

  $(".instagram").instagram({
    userId: 145937522,
    //hash: 'love',
    clientId: 'c038b3d436624c2893e3623b18354c43',
    accessToken: '145937522.c038b3d.e1709bd3843046f8bc67f45318920313',
    show: 4,
    onComplete: function(photos, data) {
      insta_next_url = data.pagination.next_url;
    }
  });
  $('#instabutton').on('click', function(){
    var button = $(this);
    var text = button.text();
    var insta_container = $(".instagram");
    button.addClass('disabled');

    if (button.text() != 'Loading…') {
      button.text('Loading…');
      insta_container.instagram({
          userId: 145937522,
          clientId: 'c038b3d436624c2893e3623b18354c43',
          accessToken: '145937522.c038b3d.e1709bd3843046f8bc67f45318920313',
          next_url : insta_next_url,
          show : 4,
          onComplete : function(photos, data) {
            console.log(data);
            insta_next_url = data.pagination.next_url;
            button.text(text);
            button.removeClass('disabled');
          }
      });
    }
  });

});
