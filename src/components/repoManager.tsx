import { useEffect, useState, useMemo, forwardRef } from 'react';
import { fetchUserRepos } from '../services/fetchUserRepos';
import './repoManager.css';
import { Repo } from '../interfaces/repo';

interface RepoManagerProps {
  username: string;
}

const RepoManager = forwardRef<HTMLDialogElement, RepoManagerProps>(({ username }, ref) => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [search, setSearch] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRepos = async () => {
      setIsLoading(true);
      try {
        const data = await fetchUserRepos(username);
        setRepos(data);

        // Extract unique, non-empty languages
        const uniqueLanguages = [...new Set(
          data
            .filter(repo => repo.programmingLanguage && repo.programmingLanguage !== '')
            .map(repo => repo.programmingLanguage)
        )];
        setLanguages(uniqueLanguages);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };
    getRepos();
  }, [username]);

  const filteredRepos = useMemo(() => {
    return repos
      .filter(repo => {
        const searchLower = search.toLowerCase();
        return searchLower === '' || repo.title.toLowerCase().includes(searchLower);
      })
      .filter(repo => {
        return selectedLanguage === '' || repo.programmingLanguage === selectedLanguage;
      });
  }, [repos, search, selectedLanguage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedLanguage(e.target.value);

  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <dialog ref={ref} className="repo-container">
      <nav className="repo-nav">
        <form method="dialog">
          <button className="close-button"><b>X</b></button>
        </form>
        <h2>PROJECTS</h2>
        <span className="social-text">This is a list of all my repositories. <a href={`https://github.com/${username}`} target='_blank' rel="noopener noreferrer">You can view them all on my Github
          <img
            src="https://skillicons.dev/icons?i=github"
            title="GitHub Link"
            alt="GitHub Link"
            className="social-icon"
            style={{ margin: '0px' }}
          /> here ↗</a></span>
        <div className="filter-controls">
          <div className="filter-group">
            <label htmlFor="languages">Programming language: </label>
            <select
              id="languages"
              name="languages"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              aria-label="Filter by programming language"
            >
              <option value="">All languages</option>
              {languages.map(language => (
                <option key={language} value={language}>{language}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="search">Search:</label>
            <input
              id="search"
              type="search"
              value={search}
              onChange={handleSearchChange}
              aria-label="Search repositories"
              placeholder="Search by title"
            />
          </div>
        </div>
      </nav>

      {isLoading ? (
        <div className="loading">Loading repositories...</div>
      ) : (
        <div className="repo-grid">
          {filteredRepos.length > 0 ? (
            filteredRepos.map((repo, index) => (
              <article key={`repo-${index}`} className="repo-card">
                <h3>
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {repo.title}
                  </a>
                </h3>
                <p className="repo-description">
                  {repo.description || 'No description available'}
                </p>
                {repo.programmingLanguage && (
                  <span className="language-tag">{repo.programmingLanguage}</span>
                )}
              </article>
            ))
          ) : (
            <p className="no-results">No repositories found matching your criteria.</p>
          )}
        </div>
      )}
    </dialog>
  );
});

export default RepoManager;
