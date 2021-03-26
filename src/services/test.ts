export class TestService{



     getLocal(){

        console.log("In Service");
        return sessionStorage.getItem('name');


    }


}