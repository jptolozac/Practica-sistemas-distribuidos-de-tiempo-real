FROM nginx:latest

COPY ./nginx_conf/ /etc/nginx/

EXPOSE 8080 3005

CMD ["nginx", "-g", "daemon off;"]