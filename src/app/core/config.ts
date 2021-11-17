import { environment } from "src/environments/environment";

export const config = {
    apiUrl: environment.production ? 'http://url-production/api' : 'http://padelpol.herokuapp.com/api'
}