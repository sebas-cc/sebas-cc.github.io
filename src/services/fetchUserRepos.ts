export async function fetchUserRepos(username: string) {
  try {
    const response = await fetch(`https://gitreposcraper-sebas-cc.netlify.app/${username}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.description || 'Error loading repositories');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching repositories: ', error);
    throw error;
  }
}
