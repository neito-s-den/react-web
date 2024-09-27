FROM nginx:latest

# Copy the content of the dist folder present 2 folders above
COPY ../../dist /var/www/front

# Copy nginx configuration files
COPY ./etc/nginx.conf /etc/nginx/nginx.conf
COPY ./etc/conf.d/front.conf /etc/nginx/conf.d/front.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]