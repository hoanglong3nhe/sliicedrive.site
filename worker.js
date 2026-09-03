export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.hostname === "media.sliicedrive.site") {
      return Response.redirect(
        `https://cdn.sliicedrive.site${url.pathname}${url.search}`,
        307
      );
    }

    if (url.hostname === "cdn.sliicedrive.site") {
      return new Response("OK", {
        status: 200,
        headers: {
          "Content-Type": "text/plain; charset=UTF-8"
        }
      });
    }

    return new Response("Not found", { status: 404 });
  }
};
