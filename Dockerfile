FROM 914632474143.dkr.ecr.us-east-1.amazonaws.com/node:12.18.0-alpine 

# Create app directory
WORKDIR /usr

COPY . .

RUN yarn

RUN yarn build

EXPOSE 8080
CMD [ "yarn", "start" ]
