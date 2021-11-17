class Github {
  constructor() {
    this.client_id = '4f11e4d1cef92eb66981';
    this.client_secret = 'ac67cd8e1baa790288901708a878ab10f18f7df2';
    this.repos_count = 3;
    this.repos_sort = 'created: asc';

  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return { 
      profile,
      repos
    }
  }
}