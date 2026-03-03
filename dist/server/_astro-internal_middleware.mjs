import 'es-module-lexer';
import './chunks/astro-designed-error-pages_3KNGRMBj.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';
import { s as sequence } from './chunks/index_CCj5RXsm.mjs';

const onRequest$1 = async (context, next) => {
  if (context.url.pathname.startsWith("/admin")) {
    const authHeader = context.request.headers.get("Authorization");
    if (!authHeader) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Panel"'
        }
      });
    }
    const authValue = authHeader.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "Sn0rs4ft1!";
    if (user !== ADMIN_USER || pwd !== ADMIN_PASS) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "WWW-Authenticate": 'Basic realm="Admin Panel"'
        }
      });
    }
  }
  return next();
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
