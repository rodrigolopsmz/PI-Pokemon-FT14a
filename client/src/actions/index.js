export const SET_DEFAULT = function (payload){
    return {
        type: 'SET_DEFAULT',
    };
};
export const CHECK_FORCE = function (){
    return {
        type: 'CHECK_FORCE'
    };
};

export const UNCHECK_FORCE = function (){
    return {
        type: 'UNCHECK_FORCE'
    };
};

export const CHECK_ALPHABET = function (){
    return {
        type: 'CHECK_ALPHABET'
    };
};

export const UNCHECK_ALPHABET = function (){
    return {
        type: 'UNCHECK_ALPHABET'
    };
};

export const CHECK_ASCENDENT = function (){
    return {
        type: 'CHECK_ASCENDENT'
    };
};

export const UNCHECK_ASCENDENT = function (){
    return {
        type: 'UNCHECK_ASCENDENT'
    };
};

export const CHECK_DESCENDENT = function (){
    return {
        type: 'CHECK_DESCENDENT'
    };
};

export const UNCHECK_DESCENDENT = function (){
    return {
        type: 'UNCHECK_DESCENDENT'
    };
};

export const CHECK_CREATED = function (){
    return {
        type: 'CHECK_CREATED'
    };
};

export const UNCHECK_CREATED = function (){
    return {
        type: 'UNCHECK_CREATED'
    };
};

export const CHECK_NOTCREATED = function (){
    return {
        type: 'CHECK_NOTCREATED'
    };
};

export const UNCHECK_NOTCREATED = function (){
    return {
        type: 'UNCHECK_NOTCREATED'
    };
};

export const FILTER_TYPE_CLICKED = function (){
    return {
        type: 'FILTER_TYPE_CLICKED'
    };
};
export const FILTER_TYPE_CLICKED_CREATEPOKEMON = function (){
    return {
        type: 'FILTER_TYPE_CLICKED_CREATEPOKEMON'
    };
};

export const TYPE_SELECTED = function (payload){
    return {
        type: 'TYPE_SELECTED',
        payload: payload
    };
};

export const TYPE_SELECTED_CREATEPOKEMON = function (payload){
    return {
        type: 'TYPE_SELECTED_CREATEPOKEMON',
        payload: payload
    };
};

export const ORDER_PANEL = function (payload){
    return {
        type: 'ORDER_PANEL',
        payload: payload
    };
};

export const FILTER_PANEL = function (payload){
    return {
        type: 'FILTER_PANEL',
        payload: payload
    };
};

export const ADD_ORDER = function (payload){
    return {
        type: 'ADD_ORDER',
        payload: payload
    };
};

export const SET_START_INDEX = function (payload){
    return {
        type: 'SET_START_INDEX',
        payload: payload
    };
};
export const SET_SHOW_LENGTH = function (payload){
    return {
        type: 'SET_SHOW_LENGTH',
        payload: payload
    };
};

export const ADD_MEMORY = function (payload){
    return {
        type: 'ADD_MEMORY',
        payload: payload
    };
};
export const SET_MEMORY = function (payload){
    return {
        type: 'SET_MEMORY',
        payload: payload
    };
};

export const SET_SEARCH = function (payload){
    return {
        type: 'SET_SEARCH',
        payload: payload
    };
};