FROM hayd/deno:alpine-0.35.0

EXPOSE 1336

WORKDIR /app

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (this is re-run only when deps.ts is modified).
# Ideally this will download and compile _all_ external files used in main.ts.
COPY src/deps.ts .
RUN deno fetch deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD src/ .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno fetch index.ts

ENTRYPOINT ["deno", "run", "--allow-net", "--allow-env", "index.ts"]