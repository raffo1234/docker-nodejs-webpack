# NODEJS

FROM node:argon

RUN npm install webpack -g

ADD . /srv/www/website
WORKDIR /srv/www/website
COPY package.json /srv/www/website/

RUN npm install
RUN webpack

ENV NODE_ENV=production
ENV PORT=8030

EXPOSE 8030
CMD ["npm", "start"]