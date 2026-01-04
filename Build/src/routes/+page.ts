// src/routes/+page.ts
interface PostMetadata {
    title: string;
    date: string;
    author?: string;
    tags?: string[];
    thumbnail?: string;
    excerpt?: string;
  }
  
  interface ShowMetadata {
    title: string;
    creator: string;
    releaseDate: string;
    genre: string[];
    thumbnail: string;
  }
  
  interface CreatorMetadata {
    name: string;
    founded: string;
    location: string;
    knownFor: string[];
    thumbnail: string;
  }
  
  export async function load() {
    // Load latest 3 posts
    const postModules = import.meta.glob<{ metadata: PostMetadata }>('../content/posts/*.md');
    const posts = await Promise.all(
      Object.entries(postModules).slice(0, 3).map(async ([path, resolver]) => {
        const module = await resolver();
        const slugMatch = path.match(/\/([\w-]+)\.md$/);
        const slug = slugMatch ? slugMatch[1] : '';
        return {
          slug,
          ...module.metadata
        };
      })
    );
  
    // Sort by date
    posts.sort((a, b) => {
      const dateA = new Date(a.date || '2000-01-01');
      const dateB = new Date(b.date || '2000-01-01');
      return dateB.getTime() - dateA.getTime();
    });
  
    // Load shows for stats
    const showModules = import.meta.glob<{ metadata: ShowMetadata }>('../content/shows/*.md');
    const showCount = Object.keys(showModules).length;
  
    // Load creators for stats
    const creatorModules = import.meta.glob<{ metadata: CreatorMetadata }>('../content/creators/*.md');
    const creatorCount = Object.keys(creatorModules).length;
  
    return {
      latestPosts: posts.slice(0, 3),
      stats: {
        shows: showCount,
        creators: creatorCount,
        posts: Object.keys(postModules).length
      }
    };
  }