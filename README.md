# CV Manager - Applicant Tracking System


## Getting started

Clone project:

    $ git clone https://github.com/UCSC-LK/CV-APP

## Architechture

### Directory structure:
```
├── client
│   ├── gulp
│   ├── src
|  
|   
|── server
|  |── config
|  |── controllers
|  |── uploads
|
```

## Setup Development Environment in Local Machine
### 1 Angular Client (Frontend)
To begin run the following commands in your terminal:

Install dependencies:

    $ cd client
    $ npm install

Install gem 'sass'

    $ gem install sass

Build Client

    $ gulp

### 2 Development Web-server
Run the following commands in your terminal:

Install dependencies:

    $ cd server
    $ npm install

Build Server

    $ gulp

### 3 Database

Be sure to have [MongoDB](https://www.mongodb.com/) installed first.

Run the following commands in your terminal:

Start Database:

    $ mongod --port 27017

Access at [http://localhost:8080/](http://localhost:8080/)
