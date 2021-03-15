class GitHub {
    constructor(){
        this.client_id = 'ead3ce22584269643c29';
        this.client_secret = '7f8deb586c97771f048bfd3e8d3713fe6ce62759';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}