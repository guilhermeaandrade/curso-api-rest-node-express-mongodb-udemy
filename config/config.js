const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env) {
        case 'dev':
        return {
            bd_string: 'mongodb://localhost/apirestudemy',
            jwt_pass: 'lkjdakj',
            jwt_expires_in: '7d'
        }

        case 'hml':
        return {
            bd_string: 'mongodb://localhost/apirestudemy',
            jwt_pass: 'lkjdakju39njkd89a',
            jwt_expires_in: '7d'
        }

        case 'prod':
        return {
            bd_string: 'mongodb://localhost/apirestudemy',
            jwt_pass: 'jfasdofjiof342342kjki4$@#$@#dsakdfsaf',
            jwt_expires_in: '7d'
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();