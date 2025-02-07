import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                product: resolve(__dirname, "products.html"),
                contact: resolve(__dirname, "contact.html"),
                policy: resolve(__dirname, "policy.html"),
                addToCart: resolve(__dirname, "addToCart.html"),
                header: resolve(__dirname, "header.js"),
                footer: resolve(__dirname, "footer.js"),
            }
        }
    }
});
