import { environment } from '../../environments/environment';

export class Constants {
    public static get apiURL(): string {
        if (environment.production) {
             return 'https://jsonplaceholder.typicode.com';
        } else {
             return 'https://jsonplaceholder.typicode.com';
        }
        
    }

    public static get apiCacheURL(): string {
        if (environment.production) {
             return 'https://jsonplaceholder.typicode.com';
        } else {
             return 'https://jsonplaceholder.typicode.com';
        }
        
    }

}
