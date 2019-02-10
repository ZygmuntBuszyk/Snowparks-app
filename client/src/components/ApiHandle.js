import axios from 'axios';
const getEndpoint = 'http://localhost:5000/';
const postEndpoint = 'http://localhost:5000/add';

class ApiHandle  {

    static getSnowparks() {
        return new Promise(async (resolve,reject) => {
            try {
                const res = await axios.get(getEndpoint);
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
               axios.post(postEndpoint, 
                snowpark
               ) 
            }
            catch(err) {
                console.log(err)
                reject(err)
            }
        })
        
    }


}

export default ApiHandle;
