import axios from 'axios';
const getEndpoint = 'http://localhost:5000/snowparks';
const postEndpoint = 'http://localhost:5000/add';

class ApiHandle  {

    static getSnowparks(param) {
        return new Promise(async (resolve,reject) => {
            try {
                const res = await axios.get(getEndpoint, {
                    params: {
                        param: param
                    }
                });
                resolve(res.data)
            }
            catch(err) {
                console.log(err);
                reject(err)
            }
        })
    }

    static addSnowpark(snowpark) {
        return new Promise(async (resolve, reject)=> {
            try {
               axios.post(postEndpoint, snowpark) 
            }
            catch(err) {
                console.log(err)
                reject(err)
            }
        })
        
    }


}

export default ApiHandle;
