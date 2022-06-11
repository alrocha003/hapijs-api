'use strict';

import DatabaseService from '../services/database.js';

export default class Routes {
    
    _service = null;
    
    constructor() {
        this._service = new DatabaseService();
        this._service.Connect();
    }
    
    Get = () => {
        return {
            method: 'GET',
            path: '/',
            handler: function (request, header) {
                let data = this._service.ExecuteFindCommand('local', 'users', {})
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
    }
    
    Post = () => {
        return {
            method: 'POST',
            path: '/',
            handler: (request, header) => {
                return { status: 200, message: `Recebido valor: ${request.query.price}` };
            }
        };
    }
    
    
    Put = () => {
        return {
            method: 'PUT',
            path: '/',
            handler: (request, header) => {
                return { status: 200, message: `Alterado` };
            }
        };
    }
    
    Delete = () => {
        return {
            method: 'DELETE',
            path: '/',
            handler: (request, header) => {
                return { status: 200, message: `Delete` };
            }
        };
    }
}
