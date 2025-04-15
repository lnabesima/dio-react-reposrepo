const API_BASE_URL = 'https://api.github.com/repos';

export async function getRepoDetails(repoFullName: string) {
  const response = await fetch(`${API_BASE_URL}/${repoFullName}`);

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const responseJson = await response.json()
  return {
    description: responseJson.description,
    html_url: responseJson.html_url,
    full_name: responseJson.full_name,
    stargazers_count: responseJson.stargazers_count,
    watchers_count: responseJson.watchers_count,
    private: responseJson.private,
    language: responseJson.language
  }
}