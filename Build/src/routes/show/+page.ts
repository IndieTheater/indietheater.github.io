interface ShowMetadata {
  title: string;
  creator: string;
  releaseDate: string;
  genre: string[];
  thumbnail: string;
}

interface ShowModule {
  metadata: ShowMetadata;
  default: any;
}

export async function load() {
  const modules = import.meta.glob<ShowModule>('../../content/shows/*.md');

  const shows = await Promise.all(
    Object.entries(modules).map(async ([path, resolver]) => {
      const module = await resolver();
      const slugMatch = path.match(/\/([\w-]+)\.md$/);
      const slug = slugMatch ? slugMatch[1] : '';
      return {
        slug,
        ...module.metadata
      };
    })
  );

  console.log('Loaded showModule.metadata:', shows);
  return { shows };
}
