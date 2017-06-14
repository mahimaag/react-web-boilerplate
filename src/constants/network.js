const Config = {
    protocol: 'http',
    host: 'localhost',
    port: 9000
}

const getPreset = () => {
    return `${Config.protocol}://${Config.host}:${Config.port}`
}

const Apis = Object.freeze({
    User: {
        Login: `${getPreset()}/user/login`,
        Logout: `${getPreset()}/user/logout`,
    }
});

const RequestMethod = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
});



export default { Apis, RequestMethod };

