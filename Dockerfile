FROM nginx

RUN apt-get -qq update && \
  apt-get -yqq install wget && \
  apt-get clean

# Remove defaults
RUN rm /etc/nginx/conf.d/default.conf

RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v1.1.2/dumb-init_1.1.2_amd64
RUN chmod +x /usr/local/bin/dumb-init
ENTRYPOINT ["/usr/local/bin/dumb-init", "--"]

WORKDIR /usr/share/nginx/html

COPY nginx/conf/nginx.conf /etc/nginx/

COPY public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx"]
