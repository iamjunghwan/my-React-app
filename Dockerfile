FROM node:16 as builder
RUN mkdir /app
WORKDIR /app
COPY ./ .
RUN npm config set color false
ENV STD_FE_APP_NAME=STD_FE
ENV STD_FE_APP_URL=/
ENV STD_FE_APP_API_HOST=http://
ENV STD_FE_PUBLIC_PATH=/
RUN npm install -g pnpm
RUN pnpm install
#COPY ./ .
RUN pnpm build

# nginx state for serving content
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
