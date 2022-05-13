export const environment = {
  production: false,
  githubUrl: 'https://github.com/',
  githubSearchApi: {
    baseUrl: "https://api.github.com/search/",
    paths: {
      users: "users"
    },
    pagination: {
      per_page: 100,
      page: 1
    }
  }
};
