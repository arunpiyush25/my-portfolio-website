import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      {
        name: "local-api-handler",
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url?.startsWith("/api/chat") && req.method === "POST") {
              const apiKey = env.GROQ_API_KEY;

              if (!apiKey) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({
                    error:
                      "Missing GROQ_API_KEY environment variable. Please create a .env file at the root of the project and add your GROQ_API_KEY.",
                  })
                );
                return;
              }

              let body = "";
              req.on("data", (chunk) => {
                body += chunk;
              });

              req.on("end", async () => {
                try {
                  const { messages } = JSON.parse(body);
                  const groqResponse = await fetch(
                    "https://api.groq.com/openai/v1/chat/completions",
                    {
                      method: "POST",
                      headers: {
                        Authorization: `Bearer ${apiKey}`,
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        messages,
                        model: "llama-3.3-70b-versatile",
                      }),
                    }
                  );

                  const data = await groqResponse.json();
                  res.statusCode = groqResponse.ok ? 200 : groqResponse.status;
                  res.setHeader("Content-Type", "application/json");
                  res.end(JSON.stringify(data));
                } catch (error: any) {
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.end(
                    JSON.stringify({
                      error: "Internal Server Error",
                      details: error.message,
                    })
                  );
                }
              });
            } else {
              next();
            }
          });
        },
      },
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            three: ["three", "three-stdlib"],
            "react-three": ["@react-three/fiber", "@react-three/drei"],
            gsap: ["gsap"],
            vendor: ["react", "react-dom", "react-router-dom"],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
      minify: "terser",
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    optimizeDeps: {
      include: ["three", "gsap", "lenis"],
    },
  };
});
