FROM nginx:alpine3.20-perl

# Remove the default configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the content of the dist folder
COPY ./dist /var/www/front

# Copy nginx configuration files
COPY ./ops/nginx/etc/nginx.conf /etc/nginx/nginx.conf
COPY ./ops/nginx/etc/conf.d/front.conf /etc/nginx/conf.d/front.conf


# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]