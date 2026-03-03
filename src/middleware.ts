import type { MiddlewareResponseHandler } from "astro";

export const onRequest: MiddlewareResponseHandler = async (context, next) => {
  if (context.url.pathname.startsWith("/admin")) {
    const authHeader = context.request.headers.get("Authorization");

    if (!authHeader) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Panel"',
        },
      });
    }

    const authValue = authHeader.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    // Use environment variables for production security
    const ADMIN_USER = import.meta.env.ADMIN_USER || "admin";
    const ADMIN_PASS = import.meta.env.ADMIN_PASS || "Sn0rs4ft1!";

    if (user !== ADMIN_USER || pwd !== ADMIN_PASS) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Panel"',
        },
      });
    }
  }

  return next();
};
