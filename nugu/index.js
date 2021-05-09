const uuid = require('uuid').v4;
const _ = require('lodash');

class Directive{
    constructor({type, audioItem}){
        this.type = type
        this.audioItem = audioItem
    };
}

class NUGURequest{
    constructor(httpReq){
        this.context = httpReq.body.context
        this.action = httpReq.body.action
        console.log('NUGURequest: ' + JSON.stringify(this.context) + ", " + JSON.stringify(this.action))
    };

    do(nuguResponse){
        this.actionRequest(nuguResponse);
    }

    actionRequest(nuguResponse){
        console.log('actionRequest');
        console.dir(this.action);

        const actionName = this.action.actionName;
        const parameters = this.action.parameters;

        switch(actionName){
            case 'startTimer':
                console.log('startTimer');
                break;
        }

    }
}

class NUGUResponse{
    constructor(){
        console.log('NUGUResponse constructor');

        this.verstion = '1.0.0';
        this.resultCode = 'OK';
        this.output = {};
        this.directives = {}
    }
}

const nuguReq = function(httpReq, httpRes, next){
    nuguResponse = new NUGUResponse()
    nuguRequest = new NUGURequest(httpReq)
    nuguRequest.do(nuguResponse)
    console.log('NUGU Response')
    console.log(JSON,stringify(nuguResponse))
    return httpRes.send(nuguResponse)
};

module.exports = nuguReq;