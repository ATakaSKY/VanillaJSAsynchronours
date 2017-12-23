class CustomHttp{
    get(url){

        return new Promise((resolve,reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })

    }

    post(url,data){

         return new Promise((resolve,reject) => {
            fetch(url,{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })


    }

    put(url,data){

         return new Promise((resolve,reject) => {
            fetch(url,{
                method:"PUT",
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })


    }

    delete(url){

         return new Promise((resolve,reject) => {
            fetch(url,{
                method:"DELETE"
            })
            .then(res => res.json())
            .then(() => resolve('Item deleted successfully...'))
            .catch(err => reject(err));
        })


    }
}

