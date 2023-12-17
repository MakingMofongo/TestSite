document.getElementById('article-form').addEventListener('submit', function(event) {
    var articleLink = document.getElementById('article_link').value;
    if (!articleLink) {
        event.preventDefault();
        alert('Please enter an article link.');
    } else if (!/^https?:\/\//i.test(articleLink)) {
        event.preventDefault();
        alert('Please enter a valid URL. It should start with "http://" or "https://".');
    }
});

(function() {
    var load_chart;
  
    load_chart = function() {
      $("body").removeClass("loaded");
      return setTimeout(function() {
        return $("body").addClass("loaded");
      }, 500);
    };
  
    $(".js-do-it-again").on("click", function() {
      return load_chart();
    });
  
    load_chart();
  
  }).call(this);
  
  //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLFVBQUEsR0FBYSxRQUFBLENBQUEsQ0FBQTtJQUNYLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxXQUFWLENBQXNCLFFBQXRCO1dBQ0EsVUFBQSxDQUFZLFFBQUEsQ0FBQSxDQUFBO2FBQ1YsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFFBQVYsQ0FBbUIsUUFBbkI7SUFEVSxDQUFaLEVBRUUsR0FGRjtFQUZXOztFQU1iLENBQUEsQ0FBRSxpQkFBRixDQUFvQixDQUFDLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFFBQUEsQ0FBQSxDQUFBO1dBQy9CLFVBQUEsQ0FBQTtFQUQrQixDQUFqQzs7RUFHQSxVQUFBLENBQUE7QUFUQSIsInNvdXJjZXNDb250ZW50IjpbImxvYWRfY2hhcnQgPSAoKSAtPlxuICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImxvYWRlZFwiKVxuICBzZXRUaW1lb3V0KCAoKSAtPlxuICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwibG9hZGVkXCIpXG4gICwgNTAwKVxuXG4kKFwiLmpzLWRvLWl0LWFnYWluXCIpLm9uIFwiY2xpY2tcIiwgKCkgLT5cbiAgbG9hZF9jaGFydCgpXG4gIFxubG9hZF9jaGFydCgpIl19
  //# sourceURL=coffeescript