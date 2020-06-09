$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="MessageArea">
          <div class="Message-info">
            <div class="Message-info__userName">
              ${message.user_name}
            </div>
            <div class="Message-info__data">
              ${message.created_at}
            </div>
          </div>
          <div class="Message">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="MessageArea">
        <div class="Message-info">
          <div class="Message-info__userName">
            ${message.user_name}
          </div>
          <div class="Message-info__data">
            ${message.created_at}
          </div>
        </div>
        <div class="Message">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      let html = buildHTML(data);
      $('.cmain').append(html);
      $('.cmain').animate({ scrollTop: $('.cmain')[0].scrollHeight});     
      $('form')[0].reset();
      $(".submit").prop('disabled', false);
    })
  });
});