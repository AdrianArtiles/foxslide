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
    username: $('.tweet').data('twitter-user'),
    join_text: "auto",
    avatar_size: 32,
    count: 3,
    loading_text: "loading tweets...",
    auto_join_text_default: "",
    auto_join_text_ed: "",
    auto_join_text_ing: "",
    auto_join_text_reply: "",
    auto_join_text_url: ""
  });

  var instagramElement = $('.instagram');
  var instagram = {
    userId: instagramElement.data('instagram-user'),
    clientId: instagramElement.data('instagram-client'),
    accessToken: instagramElement.data('instagram-access-token')
  };

  $(".instagram").instagram({
    userId: instagram.userId,
    clientId: instagram.clientId,
    accessToken: instagram.accessToken,
    show: 4,
    onComplete: function(photos, data) {
      if (data.pagination) {
        insta_next_url = data.pagination.next_url;
      }
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
          userId: instagram.userId,
          clientId: instagram.clientId,
          accessToken: instagram.accessToken,
          next_url : insta_next_url,
          show : 4,
          onComplete : function(photos, data) {
            insta_next_url = data.pagination.next_url;
            button.text(text);
            button.removeClass('disabled');
          }
      });
    }
  });

  var githubInfo = $("#gh_repos");

  github.showRepos({
    user: githubInfo.data('github-user'),
    count: githubInfo.data('github-repo-count'),
    skip_forks: githubInfo.data('github-skip-forks'),
    target: githubInfo
  });

  var $container = $('#post-container');
  $container.imagesLoaded(function(){
    $container.masonry({
      itemSelector : '.span4'
    });
  });

});
