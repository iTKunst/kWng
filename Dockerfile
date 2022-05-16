FROM img_kwng_base

COPY ./src/ ./src/

COPY env.sh .
COPY env_proj.sh .
COPY debug.sh .
