'use strict';

const Get = {
    method: 'GET',
    path: '/',
    handler: function (request, header) {
        return `'<div style="margin-left: 500px; margin-top: 300px">
        <h1 style="color: #ff54ab;">Hello World ${request.query.name} =D</h1>
        </div>'`;
    },
    options: {
        auth: false,
        validate: {

        }
    }
};

const Post = {
    method: 'POST',
    path: '/',
    handler: (request, header) => {
        return { status: 200, message: `Recebido valor: ${request.query.price}` };
    }
}


const Put = {
    method: 'PUT',
    path: '/',
    handler: (request, header) => {
        return { status: 200, message: `Alterado` };
    }
}

const Delete = {
    method: 'DELETE',
    path: '/',
    handler: (request, header) => {
        return { status: 200, message: `Delete` };
    }
}

export default { Get, Post, Put, Delete };