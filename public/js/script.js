function Func() {
    fetch ("./hospital.json") 
        .then((res) => {
            return res.json();
        })
        .then ((data) => console.log(data));
    }
