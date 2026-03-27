FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ENV REACT_APP_API_URL=http://localhost:5000
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN echo 'server { listen 3000; location / { root /usr/share/nginx/html; index index.html; try_files $uri $uri/ /index.html; } }' > /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
