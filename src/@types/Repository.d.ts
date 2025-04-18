export interface Repository {
  id: number;
  full_name:string;
  stargazers_count: number
  watchers_count: number;
  html_url: string;
  description: string;
  private: boolean
  language: string;
  name: string
  owner: string
  owner_avatar_url: string
  forks_count: number
  updated_at: string
}