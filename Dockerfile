FROM nginx:1.9.15-alpine

# Remove defaults
RUN rm /etc/nginx/conf.d/default.conf

ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.2/dumb-init_1.1.2_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init
ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

WORKDIR /usr/share/nginx/html

COPY nginx/conf/nginx.conf /etc/nginx/

COPY public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx"]
