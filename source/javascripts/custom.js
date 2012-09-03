$(function(){
  $('[rel="tooltip"]').tooltip();

  $(".tweet").tweet({
    username: 'adrianartiles',
    join_text: "auto",
    avatar_size: 32,
    count: 5,
    loading_text: "loading tweets...",
    auto_join_text_default: "",
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: "",
    loading_text: "loading tweets..."
  });

  $(".instagram").instagram({
    hash: 'aa',
    clientId: 'c038b3d436624c2893e3623b18354c43'
  });

});
